import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, setTreatment, selectedDate }) => {
    // set availableOption details in treatment variable
    const { name, slots } = treatment;
    const date = format(selectedDate, "PP");

    // booking submission handler
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const patient = form.fullName.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const slot = form.slot.value;
        const booking = {
            date,
            treatment: name,
            patient,
            phone,
            email,
            slot,
        }
        setTreatment(null);
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <form onSubmit={handleBooking} className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-10">{name}</h3>
                    <input name='date' disabled value={date} type="text" placeholder="Type here" className="input input-bordered mb-3 w-full" />
                    <select name='slot' className="select select-bordered mb-3 w-full">
                        {
                            slots &&
                            slots.map((slot, idx) =>
                                <option
                                    key={idx}
                                    value={slot}>{slot}</option>)
                        }
                    </select>
                    <input name='fullName' type="text" placeholder="Full Name" className="input input-bordered mb-3 w-full" />
                    <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered mb-3 w-full" />
                    <input name='email' type="text" placeholder="Email Address" className="input input-bordered mb-3 w-full" />
                    <button className="btn btn-block">Submit</button>
                </form>
            </div>
        </>
    );
};

export default BookingModal;