import React from 'react';
import appointment from '../../../assets/images/appointment.png'
import PrimaryBtn from '../../../Components/PrimaryBtn/PrimaryBtn';

const ContactUs = () => {
    return (
        <div style={{ background: `url(${appointment})` }} className="mt-20 py-8 bg-neutral px-8">
            <div className='py-8'>
                <h3 className='text-xl text-primary font-bold text-center'>Contact Us</h3>
                <h2 className='text-3xl font-bold text-center text-white'>Stay connected with us</h2>
            </div>
            <form className='w-2/5 mx-auto text-center '>
                <input type="email" className='w-full p-2 border-neutral border rounded-md mb-5' placeholder='Email' />
                <input type="text" className='w-full p-2 border-neutral border rounded-md mb-5' placeholder='Subject' />
                <textarea name="" className='w-full h-40 p-2 border-neutral border rounded-md mb-5' placeholder='Your Message'></textarea>
                <PrimaryBtn>Submit</PrimaryBtn>
            </form>
        </div >
    );
};

export default ContactUs;