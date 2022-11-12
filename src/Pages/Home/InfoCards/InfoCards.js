import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const InfoCards = () => {
    const allInfo = [
        {
            id: 1,
            icon: clock,
            name: 'Opening Hours',
            description: "Openin Hours is 9Am to 6PM",
            bg: "bg-primary"
        },
        {
            id: 2,
            icon: marker,
            name: 'Visit Our Location',
            description: "29/B, Block-C, Road-31, CTG, BD",
            bg: "bg-accent"
        },
        {
            id: 3,
            icon: phone,
            name: 'Contact Us Now',
            description: "+123456789",
            bg: "bg-primary"
        }
    ]

    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 md:mt-48 mt-32 md:mx-0 mx-3'>
            {
                allInfo.map(info => <InfoCard
                    key={info.id}
                    info={info}></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;