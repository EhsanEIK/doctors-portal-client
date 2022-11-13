import { format } from 'date-fns';
import React from 'react';
import { DayPicker } from 'react-day-picker';
import chair from '../../../assets/images/chair.png';

const AppointmentTopBanner = ({ selectedDate, setSelectedDate }) => {

    return (
        <section>
            <div className="hero bg-base-100 md:py-28 py-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} alt="" className="md:w-1/2 w-full rounded-lg shadow-2xl" />
                    <div className='lg:mr-28 lg:mt-0 mt-10'>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentTopBanner;