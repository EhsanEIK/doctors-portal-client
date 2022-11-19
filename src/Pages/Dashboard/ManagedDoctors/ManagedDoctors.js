import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ConfirmationModel from '../../Shared/ConfirmationModel/ConfirmationModel';

const ManagedDoctors = () => {
    const { data: doctors = [] } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/doctors');
                const data = await res.json();
                return data;
            } catch (error) {
                console.error(error);
            }
        }
    })

    return (
        <div>
            <h1 className='text-3xl text-center font-semibold mb-5'>AManaged Doctors</h1>
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
                                        <label htmlFor="confirmation-modal" className='btn btn-sm bg-red-600 border-red-600 text-white'>Delete</label>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
            <ConfirmationModel></ConfirmationModel>
        </div>
    );
};

export default ManagedDoctors;