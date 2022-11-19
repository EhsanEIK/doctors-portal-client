import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [errorMsg, setErrorMsg] = useState('');
    const imageHostKey = process.env.REACT_APP_imgbbHostKey;

    const { data: specilities = [] } = useQuery({
        queryKey: ['appointmentSpecialty'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/appointmentSpecialty');
                const data = await res.json();
                return data;
            }
            catch (err) { console.error(err) }
        }
    });

    const handleAddDoctor = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                if (imageData.success) {
                    const imageURL = imageData.data.url
                    console.log(imageURL)
                }
            })
    }

    return (
        <div>
            <div className='h-[500px]'>
                <div className='w-96 shadow-lg p-10 pt-2 md:mx-0 mx-3'>
                    <h1 className='text-3xl text-center font-semibold mb-5'>Add A Doctor</h1>
                    {errorMsg && <p className='text-base text-center text-red-600 my-3'>{errorMsg}</p>}
                    <form onSubmit={handleSubmit(handleAddDoctor)}>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                {...register("name", {
                                    required: "Name is required"
                                })}
                                type="text" className="input input-bordered w-full" />
                            {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                {...register("email", {
                                    required: "Email is required"
                                })}
                                type="email" className="input input-bordered w-full" />
                            {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Specialty</span>
                            </label>
                            <select
                                {...register("specialty", {
                                    required: "Specialty is required"
                                })}
                                className="select select-bordered w-full max-w-xs">
                                <option value="" disabled selected>--SELECT--</option>
                                {
                                    specilities.map(specialty =>
                                        <option key={specialty._id}
                                            value={specialty.name}>{specialty.name}</option>
                                    )
                                }
                            </select>
                            {errors.specialty && <p className='text-red-600'>{errors.specialty?.message}</p>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                {...register("image", {
                                    required: "Image is required"
                                })}
                                type="file"
                                accept='image/*'
                                className="input input-bordered w-full" />
                            {errors.image && <p className='text-red-600'>{errors.image?.message}</p>}
                        </div>
                        <input className='btn btn-accent w-full mt-5' value="Submit" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddDoctor;