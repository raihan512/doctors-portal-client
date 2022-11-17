import React from 'react';
import { Link } from 'react-router-dom';
import footerbg from '../../../assets/images/footer.png'

const Footer = () => {
    return (
        <footer style={{ background: `url(${footerbg})`, "backgroundPosition": "center center" }} className="footer p-10 text-neutral-content bg-base" >
            <div>
                <span className="footer-title text-neutral">Services</span>
                <Link className="link link-hover text-black">Branding</Link>
                <Link className="link link-hover text-black">Design</Link>
                <Link className="link link-hover text-black">Marketing</Link>
                <Link className="link link-hover text-black">Advertisement</Link>
            </div>
            <div>
                <span className="footer-title text-neutral">Company</span>
                <Link className="link link-hover text-black">About us</Link>
                <Link className="link link-hover text-black">Contact</Link>
                <Link className="link link-hover text-black">Jobs</Link>
                <Link className="link link-hover text-black">Press kit</Link>
            </div>
            <div>
                <span className="footer-title text-neutral">Address</span>
                <p className='text-black'>New York - 101010 Hudson</p>
            </div>
        </footer>
    );
};

export default Footer;