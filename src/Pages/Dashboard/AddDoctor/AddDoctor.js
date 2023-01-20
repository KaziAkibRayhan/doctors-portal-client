import React from 'react';
import { useForm } from 'react-hook-form';

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const handleAddDoctor = (data) => {
        console.log(data);
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
                    <select className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Pick a Specialty</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>
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