import React from 'react';

const Service = ({ service }) => {
    const { name, icon, description } = service;

    return (
        <div className="card md:w-96 w-full bg-base-100 shadow-xl md:mt-0 mt-5">
            <figure className="px-10 pt-10">
                <img src={icon} alt={name} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Service;