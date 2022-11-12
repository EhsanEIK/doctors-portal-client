import React from 'react';

const InfoCard = ({ info }) => {
    const { id, icon, name, description, bg } = info;

    return (
        <div className={`${bg} flex items-center rounded-xl w-96 p-10 shadow-xl`}>
            <figure className="mr-5">
                <img src={icon} alt={name} className="rounded-xl" />
            </figure>
            <div className="text-white">
                <h2 className="text-xl">{name}</h2>
                <p className='text-base'>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;