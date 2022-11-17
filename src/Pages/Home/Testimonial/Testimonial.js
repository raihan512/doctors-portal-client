import React from 'react';
import user from '../../../assets/images/people1.png'
import user2 from '../../../assets/images/people2.png'
import user3 from '../../../assets/images/people3.png'
import TestimonialItem from './TestimonialItem';

const Testimonial = () => {
    const testimonials = [
        {
            id: 1,
            text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            user: user,
            address: 'California',
            userName: 'Winson Herry'
        },
        {
            id: 2,
            text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            user: user2,
            address: 'California',
            userName: 'Winson Herry'
        },
        {
            id: 3,
            text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            user: user3,
            address: 'California',
            userName: 'Winson Herry'
        }
    ]
    return (
        <div className='mt-16 px-8'>
            <div>
                <h3 className='text-xl text-primary'>Testimonial</h3>
                <h2 className='text-3xl font-bold'>What Our Patients Says</h2>
            </div>
            <div className='mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    testimonials.map(testimonial => <TestimonialItem
                        key={testimonial.id}
                        testimonial={testimonial}
                    ></TestimonialItem>)
                }
            </div>
        </div>
    );
};

export default Testimonial;