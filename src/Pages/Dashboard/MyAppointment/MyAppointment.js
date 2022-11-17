import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const MyAppointment = () => {
    const { user } = useContext(AuthContext);
    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings'],
        queryFn: async function () {
            const res = await fetch(`http://localhost:5000/bookings?email=${user?.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <h1 className='text-3xl text-semibold mb-5'>My Appointment</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Appointment Date</th>
                            <th>Treatment</th>
                            <th>Phone</th>
                            <th>Slot</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking, idx) =>
                                <tr key={booking._id} className="hover">
                                    <th>{idx + 1}</th>
                                    <td>{booking.patient}</td>
                                    <td>{booking.appointmentDate}</td>
                                    <td>{booking.treatment}</td>
                                    <td>{booking.phone}</td>
                                    <td>{booking.slot}</td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;