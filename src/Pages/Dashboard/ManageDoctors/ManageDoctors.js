import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null)
    const closeModal = () => {
        setDeletingDoctor(null)
    }
    const handleDeleteDoctor = (doctor) => {
        console.log(doctor);
    }
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

    // const handleDeleteDoctor = id => {
    //     const proceed = window.confirm('Are you sure to delete this doctor!')
    //     if (proceed) {
    //         fetch(`http://localhost:5000/doctors/${id}`, {
    //             method: 'DELETE'
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 if (data.deletedCount) {
    //                     toast.success('Successfully Deleted The Doctor!')
    //                     refetch()
    //                 }
    //             })
    //     }
    // }

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
                                <td>
                                    <label onClick={() => setDeletingDoctor(doctor)}
                                        htmlFor="confirmationModal" className="btn btn-sm btn-error">Delete</label>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {deletingDoctor && <ConfirmationModal
                title={`Are you sure, you want to delete?`}
                message={`If you delete ${deletingDoctor.name}.It cannot be undone!`}
                successAction={handleDeleteDoctor}
                modalData={deletingDoctor}
                closeModal={closeModal}
            ></ConfirmationModal>}
        </div>
    );
};

export default ManageDoctors;