import React from 'react';

const Review = ({ review }) => {
    const { name, image, text, location } = review;

    return (
        <div className="card md:w-96 w-full bg-base-100 shadow-xl md:mt-0 mt-10">
            <div className="card-body">
                <p>{text}</p>
                <div className='flex items-center mt-10'>
                    <div className="flex justify-center w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={image} alt={name} />
                    </div>
                    <div className='ml-5'>
                        <h2 className="card-title">{name}</h2>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;