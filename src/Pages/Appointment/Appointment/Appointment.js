import React, { useState } from 'react';
import AppointmentTopBanner from '../AppointmentTopBanner/AppointmentTopBanner';
import AvailavleAppointment from '../AvailavleAppointment/AvailavleAppointment';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <div>
            <AppointmentTopBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}></AppointmentTopBanner>
            <AvailavleAppointment
                selectedDate={selectedDate}></AvailavleAppointment>
        </div>
    );
};

export default Appointment;