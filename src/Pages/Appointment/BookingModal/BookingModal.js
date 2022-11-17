import { format } from 'date-fns/esm';
import React from 'react';

const BookingModal = ({ service, setService, selectedDate }) => {
    const { name, slots } = service;
    const date = format(selectedDate, 'PP')

    const handleOnSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const patientName = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const appointmentDetails = { serviceName: name, date, slot, patientName, email, phone }
        console.log(appointmentDetails);
        // After click submit button we want to cclose the form box thats why we are setting the set treatment as null 
        setService(null)
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-5">{name}</h3>
                    <form onSubmit={handleOnSubmit}>
                        <input type="text" value={date} disabled className="input input-bordered w-full rounded-md mb-2" />
                        <select
                            name='slot'
                            className="select input input-bordered focus:border-secondary focus:outline-none w-full rounded-md mb-2">
                            {
                                slots.map((slot, index) => <option key={index}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Name" className="input input-bordered focus:border-secondary focus:outline-none w-full rounded-md mb-2" />
                        <input name='email' type="text" placeholder="Email" className="input input-bordered focus:border-secondary focus:outline-none w-full rounded-md mb-2" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered focus:border-secondary focus:outline-none w-full rounded-md mb-2" />
                        <input type="submit" value="Submit" className='btn btn-accent w-full rounded-md text-white' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;