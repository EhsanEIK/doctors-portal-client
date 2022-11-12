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
            description: "Openin Hours is 9Am to 6PM"
        },
        {
            id: 2,
            icon: marker,
            name: 'Visit Our Location',
            description: "29/B, Block-C, Road-31, CTG, BD"
        },
        {
            id: 3,
            icon: phone,
            name: 'Contact Us Now',
            description: "+123456789"
        }
    ]
    return (
        <div className='grid grid-cols-3 gap-5 mt-20'>
            {
                allInfo.map(info => <InfoCard
                    key={info.id}
                    info={info}></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;