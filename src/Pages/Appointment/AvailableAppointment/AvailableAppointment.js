import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointment = ({ selectedDate }) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState([]);

    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    }, [])

    return (
        <section className='my-32'>
            <p className='md:text-2xl text-xl text-secondary text-center font-semibold'>Available Appointments on {format(selectedDate, 'PP')}</p>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 md:mx-0 mx-3 md:mt-16 mt-10'>
                {
                    appointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        appointmentOption={option}
                        setTreatment={setTreatment}></AppointmentOption>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                    selectedDate={selectedDate}
                    treatment={treatment}></BookingModal>
            }
        </section>
    );
};

export default AvailableAppointment;