import React from 'react';

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
    const { name, slots } = appointmentOption;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-xl font-bold text-primary text-center">{name}</h2>
                <p className='text-center'>{slots.length ? slots[0] : 'Try another day'}</p>
                <p className='text-center'>{slots.length && slots.length > 1 ? `${slots.length} spaces available` : `${slots.length} space available`}</p>
                <div className="card-actions justify-center">
                    <label
                        onClick={() => setTreatment(appointmentOption)}
                        htmlFor="booking-modal"
                        className="btn btn-primary text-white">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;