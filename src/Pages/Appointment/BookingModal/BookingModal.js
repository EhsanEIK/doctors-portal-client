import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const BookingModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
    const { user } = useContext(AuthContext);

    // set availableOption details in treatment variable
    const { name, slots, price } = treatment;
    const date = format(selectedDate, "PP");

    // booking submission handler
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const patient = form.fullName.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const slot = form.slot.value;
        const booking = {
            appointmentDate: date,
            treatment: name,
            patient,
            email,
            phone,
            slot,
            price
        }

        fetch('https://doctors-portal-server-flame.vercel.app/bookings', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("Booking Confirmed");
                    setTreatment(null);
                    refetch();
                }
                else {
                    toast.error(data.message);
                }
            })
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
                    <input name='fullName' defaultValue={user?.displayName} disabled type="text" placeholder="Full Name" className="input input-bordered mb-3 w-full" />
                    <input name='email' defaultValue={user?.email} disabled type="text" placeholder="Email Address" className="input input-bordered mb-3 w-full" />
                    <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered mb-3 w-full" />
                    <button className="btn btn-block" disabled={!user}>Submit</button>
                </form>
            </div>
        </>
    );
};

export default BookingModal;