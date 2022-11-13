import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, selectedDate }) => {
    // set availableOption details in treatment variable
    const { name, slots } = treatment;
    const date = format(selectedDate, "PP");

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <form className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-5">{name}</h3>
                    <input name='date' disabled value={date} type="text" placeholder="Type here" className="input input-bordered mb-3 w-full" />
                    <select className="select select-bordered mb-3 w-full">
                        {
                            slots &&
                            slots.map((slot, idx) =>
                                <option
                                    key={idx}
                                    value={slot}>{slot}</option>)
                        }
                    </select>
                    <input name='' type="text" placeholder="Type here" className="input input-bordered mb-3 w-full" />
                    <input name='' type="text" placeholder="Type here" className="input input-bordered mb-3 w-full" />
                    <input name='' type="text" placeholder="Type here" className="input input-bordered mb-3 w-full" />
                    <button className="btn btn-block">Submit</button>
                </form>
            </div>
        </>
    );
};

export default BookingModal;