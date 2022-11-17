import React from 'react';

const TestimonialItem = ({ testimonial }) => {
    const { text, user, userName, address } = testimonial
    return (
        <div className="card card-compact shadow-xl p-8">
            <p className='text-lg font-semibold text-black mb-5'>{text}</p>
            <div className='flex items-center'>
                <figure><img src={user} alt="User" className='w-16 h-16 mr-3 rounded-full p-1 border-2 border-primary' /></figure>
                <div>
                    <h5 className='text-2xl font-semibold'>{userName}</h5>
                    <p>{address}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialItem;