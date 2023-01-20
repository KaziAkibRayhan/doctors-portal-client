import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import Loading from '../../Shared/Loading/Loading';

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const imageHostKey = process.env.REACT_APP_imgbb_key
    const { data: specialties, isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/appointmentSpecialty')
            const data = await res.json()
            return data;
        }
    })

    const handleAddDoctor = (data) => {
        const image = data.image[0]
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                if (imageData.success) {
                    console.log(imageData.data.url);
                }
            }).catch(error => console.log(error))
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='w-96 p-7'>
            <h3 className="text-3xl">Add A Doctor</h3>
            <form onSubmit={handleSubmit(handleAddDoctor)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        {...register("name", { required: true })}
                        type="text"
                        className="input input-bordered w-full max-w-xs"
                    />
                    {errors.name && (
                        <span className="text-red-500 font-bold">
                            This name field is required
                        </span>
                    )}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        {...register("email", {
                            required: "Email Address must be added.",
                        })}
                        type="email"
                        className="input input-bordered w-full max-w-xs"
                    />
                    {errors.email && (
                        <p className="text-red-500 font-bold">{errors.email.message}</p>
                    )}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Specialty</span>
                    </label>
                    <select {...register('specialty')} className="select input-bordered w-full max-w-xs">
                        {
                            specialties?.map(specialty => <option
                                key={specialty._id} value={specialty.name}
                            >{specialty.name}</option>)
                        }
                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input
                        {...register("image", { required: true })}
                        type="file"
                        className="input input-bordered w-full max-w-xs"
                    />
                    {errors.image && (
                        <span className="text-red-500 font-bold">
                            This photo field is required
                        </span>
                    )}
                </div>
                <input
                    type="submit"
                    className="btn btn-accent w-full max-w-xs mt-4"
                    value={"Add Doctor"}
                />
            </form>
        </div>
    );
};

export default AddDoctor;