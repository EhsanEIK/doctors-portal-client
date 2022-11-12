import React from 'react';
import { Link } from 'react-router-dom';
import bgFooter from '../../../assets/images/footer.png'

const Footer = () => {
    return (
        <footer className='container mx-auto mt-32' style={{ backgroundImage: `url(${bgFooter})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
            <div className="footer flex justify-between p-10 text-black">
                <div>
                    <span className="footer-title">Services</span>
                    <Link to='/' className="link link-hover">Branding</Link>
                    <Link to='/' className="link link-hover">Design</Link>
                    <Link to='/' className="link link-hover">Marketing</Link>
                    <Link to='/' className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link to='/' className="link link-hover">About us</Link>
                    <Link to='/' className="link link-hover">Contact</Link>
                    <Link to='/' className="link link-hover">Jobs</Link>
                    <Link to='/' className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link to='/' className="link link-hover">Terms of use</Link>
                    <Link to='/' className="link link-hover">Privacy policy</Link>
                    <Link to='/' className="link link-hover">Cookie policy</Link>
                </div>
            </div>
            <p className='text-center my-5'>&copy; 2022 - Developed by <a href="https://www.linkedin.com/in/ehsanulislamkhan/" target="_blank" rel="noopener noreferrer" className="text-warning font-bold text-decoration-none">Ehsan</a></p>
        </footer>
    );
};

export default Footer;