import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import Infocard from './Infocard';

const InfoCards = () => {

    const infodata = [
        {
            id: 1,
            name: 'Opening Hours',
            desc: "Open from 9AM to 10 PM",
            icon: clock,
            bgClass: "bg-gradient-to-r from-primary to-secondary"
        },
        {
            id: 2,
            name: 'Visit Our Location',
            desc: "Brooklyn, NY 10036, United States",
            icon: marker,
            bgClass: "bg-neutral"
        },
        {
            id: 3,
            name: 'Contact Us Now',
            desc: "+000 123 456789",
            icon: phone,
            bgClass: "bg-gradient-to-r from-primary to-secondary"
        }
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8'>
            {
                infodata.map(info => <Infocard
                    key={info.id}
                    info={info}
                ></Infocard>)
            }
        </div>
    );
};

export default InfoCards;