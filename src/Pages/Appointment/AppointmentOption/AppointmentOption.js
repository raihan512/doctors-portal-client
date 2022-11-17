import React from 'react';

const AppointmentOption = ({ option, setService }) => {
    const { name, slots } = option;
    return (
        <div className="card  shadow-2xl">
            <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl font-bold text-secondary">{name}</h2>
                <p className='text-lg font-bold'>{slots[0]}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions">
                    <label
                        htmlFor="booking-modal"
                        className="btn btn-primary text-white bg-gradient-to-r from-primary to-secondary"
                        onClick={() => setService(option)}>
                        Book Appointment
                    </label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;