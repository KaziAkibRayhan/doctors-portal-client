import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';

const ManageDoctors = () => {
    const { data: doctors, isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/doctors', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                const data = await res.json()
                return data
            } catch (error) {

            }
        }
    })

    const handleDeleteDoctor = id => {
        const proceed = window.confirm('Are you sure to delete this doctor!')
        if (proceed) {
            fetch(`http://localhost:5000/doctors/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        toast.success('Successfully Deleted The Doctor!')
                        refetch()
                    }
                })
        }
    }

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h3 className="text-3xl mb-5">Manage Doctors : {doctors?.length}</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctors?.map((doctor, idx) => (
                            <tr key={doctor?._id} className="hover">
                                <th>{idx + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src={doctor?.image} alt='' />
                                    </div>
                                </div></td>
                                <td>{doctor?.name}</td>
                                <td>{doctor?.email}</td>
                                <td>{doctor?.specialty}</td>
                                <td><button onClick={() => handleDeleteDoctor(doctor._id)} className="btn btn-sm btn-error">Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDoctors;