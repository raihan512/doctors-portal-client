import React from 'react';

const Infocard = ({ info }) => {
    const { name, desc, icon, bgClass } = info;
    return (
        <div className={`card card-side shadow-xl ${bgClass} p-6`}>
            <figure><img src={icon} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title text-white">{name}</h2>
                <p className='text-white'>{desc}</p>

            </div>
        </div>
    );
};

export default Infocard;