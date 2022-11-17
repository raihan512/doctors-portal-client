import React from 'react';
import cavity from '../../../assets/icons/cavity.svg'
import fluoride from '../../../assets/icons/fluoride.svg'
import whitening from '../../../assets/icons/whitening.svg'
import Service from './Service';


const Services = () => {
    const services = [
        {
            id: 1,
            name: "Fluoride Treatment",
            desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            icon: fluoride,
        },
        {
            id: 2,
            name: "Cavity Filling",
            desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            icon: cavity,
        },
        {
            id: 3,
            name: "Teeth Whitening",
            desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            icon: whitening,
        }
    ]
    return (
        <div className='my-20 px-8'>
            <h3 className='text-primary font-bold text-xl text-center'>OUR SERVICES</h3>
            <h4 className='text-4xl font-semibold text-center mb-20'>Services We Provide</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;