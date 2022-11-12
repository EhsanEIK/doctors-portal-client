import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import person1 from '../../../assets/images/people1.png';
import person2 from '../../../assets/images/people2.png';
import person3 from '../../../assets/images/people3.png';
import Review from './Review';

const Testimonials = () => {
    const reviews = [
        {
            id: 1,
            text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            image: person1,
            name: "Winson Herry",
            location: "California",
        },
        {
            id: 2,
            text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            image: person2,
            name: "Winson Herry",
            location: "California",
        },
        {
            id: 3,
            text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            image: person3,
            name: "Winson Herry",
            location: "California",
        }
    ]

    return (
        <section className='md:mt-48 mt-32'>
            <div className='flex justify-between md:mx-0 mx-5'>
                <div>
                    <h4 className='text-xl text-primary font-bold'>Testimonial</h4>
                    <h2 className='text-4xl text-accent mt-2'>What Our Patient Says</h2>
                </div>
                <figure>
                    <img className='w-44' src={quote} alt="" />
                </figure>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-16 md:mx-0 mx-3'>
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;