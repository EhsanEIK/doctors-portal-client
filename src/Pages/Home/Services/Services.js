import React from 'react';
import Service from './Service';
import cavity from '../../../assets/images/cavity.png';
import fluoride from '../../../assets/images/fluoride.png';
import whitening from '../../../assets/images/whitening.png';

const Services = () => {
    const services = [
        {
            id: 1,
            icon: fluoride,
            name: 'Fluoride Treatment',
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the."
        },
        {
            id: 2,
            icon: cavity,
            name: 'Cavity Filling',
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the."
        },
        {
            id: 3,
            icon: whitening,
            name: 'Teeth Whitening',
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the."
        }
    ]

    return (
        <section className='md:mt-48 mt-32'>
            <h4 className='text-xl text-primary text-center font-bold uppercase'>Our Services</h4>
            <h2 className='text-4xl text-accent text-center mt-2'>Services We Provide</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-16 md:mx-0 mx-3'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}></Service>)
                }
            </div>
        </section>
    );
};

export default Services;