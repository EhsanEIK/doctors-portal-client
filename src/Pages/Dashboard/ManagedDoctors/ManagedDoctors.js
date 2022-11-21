import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModel from '../../Shared/ConfirmationModel/ConfirmationModel';

const ManagedDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);

    const { data: doctors = [], refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch('https://doctors-portal-server-flame.vercel.app/doctors', {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            } catch (error) {
                console.error(error);
            }
        }
    })

    // close confirmation modal
    const closeModal = () => {
        setDeletingDoctor(null);
    }

    // delete the doctors from db
    const handleDelete = doctor => {
        fetch(`https://doctors-portal-server-flame.vercel.app/doctors/${doctor._id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success(`${doctor.name} deleted successfully`);
                    setDeletingDoctor(null);
                    refetch();
                }
            })
    }

    return (
        <div>
            <h1 className='text-3xl text-center font-semibold mb-5'>Managed Doctors</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, idx) =>
                                <tr key={doctor._id} className="hover">
                                    <th>{idx + 1}</th>
                                    <td>
                                        <div className="avatar">
                                            <div className="w-16 rounded-full">
                                                <img src={doctor.image} alt={doctor.name} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{doctor.name}</td>
                                    <td>{doctor.specialty}</td>
                                    <td>
                                        <label onClick={() => setDeletingDoctor(doctor)}
                                            htmlFor="confirmation-modal"
                                            className='btn btn-sm bg-red-600 border-red-600 text-white'>
                                            Delete</label>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingDoctor && <ConfirmationModel
                    title={'Are you sure to delete?'}
                    message={`If you delete ${deletingDoctor.name}. I can't be undone.`}
                    closeModal={closeModal}
                    successAction={handleDelete}
                    modalData={deletingDoctor}></ConfirmationModel>
            }
        </div>
    );
};

export default ManagedDoctors;