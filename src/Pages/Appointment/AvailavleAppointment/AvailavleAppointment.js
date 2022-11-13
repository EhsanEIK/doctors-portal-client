import { format } from 'date-fns';
import React from 'react';

const AvailavleAppointment = ({ selectedDate }) => {
    return (
        <section className='my-32'>
            <p className='text-2xl text-secondary text-center font-semibold'>Available Appointments on {format(selectedDate, 'PP')}</p>
        </section>
    );
};

export default AvailavleAppointment;