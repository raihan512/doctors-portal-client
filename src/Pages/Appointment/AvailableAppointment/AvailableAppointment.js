import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOption from '../AppointmentOption/AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';

const AvailableAppointment = ({ selectedDate }) => {
    const [availableAppointment, setAvailableAppointment] = useState([]);
    const [service, setService] = useState(null)

    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setAvailableAppointment(data))
            .catch(error => console.error(error))
    }, [])
    return (
        <div className='px-8 my-10'>
            <h3 className='text-secondary font-bold text-2xl text-center mb-6'>Available Appointment on {format(selectedDate, 'PP')}</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    availableAppointment.map(option => <AppointmentOption
                        key={option._id}
                        option={option}
                        setService={setService}
                    ></AppointmentOption>)
                }
            </div>
            {
                service &&
                <BookingModal
                    service={service}
                    setService={setService}
                    selectedDate={selectedDate}
                ></BookingModal>
            }
        </div>
    );
};

export default AvailableAppointment;