import React, { useState } from 'react';
import AppointmentTopBanner from '../AppointmentTopBanner/AppointmentTopBanner';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <div>
            <AppointmentTopBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}></AppointmentTopBanner>
            <AvailableAppointment
                selectedDate={selectedDate}></AvailableAppointment>
        </div>
    );
};

export default Appointment;