import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import appointment from '../../../assets/images/appointment.png'

const ContactUs = () => {
    return (
        <section className="hero mt-48 p-10" style={{ backgroundImage: `url(${appointment})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
            <div className="hero-content">
                <div className="card flex-shrink-0 w-full max-w-sm">
                    <div>
                        <h4 className='text-xl text-primary text-center font-bold'>Contact Us</h4>
                        <h2 className='text-4xl text-base-100 text-center mt-2'>Stay Connected with Us</h2>
                    </div>
                    <form className="mt-10">
                        <div className="form-control">
                            <input type="email" placeholder="Email Address" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-3">
                            <input type="text" placeholder="Subject" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-3">
                            <textarea className="textarea textarea-bordered h-36" placeholder="Your Message" required></textarea>
                        </div>
                        <div className="flex justify-center mt-6">
                            <PrimaryButton>Submit</PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;