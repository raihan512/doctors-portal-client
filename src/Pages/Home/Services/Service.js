import React from 'react';

const Service = ({ service }) => {
    const { name, desc, icon } = service
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={icon} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{desc}</p>

            </div>
        </div>
    );
};

export default Service;