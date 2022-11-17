import React from 'react';
import PrimaryBtn from '../../../Components/PrimaryBtn/PrimaryBtn';
import doctor from '../../../assets/images/doctor-small.png'
import appointment from '../../../assets/images/appointment.png'

const MakeAppointment = () => {
    return (
        <div className="hero mt-32 px-8" style={{
            background: `url(${appointment})`
        }}>
            <div className="hero-content flex-col lg:flex-row" >
                <img src={doctor} className="w-1/2 -mt-32 rounded-lg shadow-2xl" alt='' />
                <div>
                    <h3 className='text-secondary text-xl'>Appointment</h3>
                    <h1 className="text-5xl font-bold text-white">Make an appointment Today</h1>
                    <p className="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryBtn>Appointment</PrimaryBtn>
                </div>
            </div>
        </div >
    );
};

export default MakeAppointment;