import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scrolling effect
        });
    };

    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img className="logo" src={assets.logo} alt="Logo" />
                    <b>Welcome to Teddy Bakez, your one-stop destination for delicious baked goods. Experience the taste of perfection with every bite!</b>
                    <div className="footer-social-icons">
                        <img src={assets.instagram_logo_icon} alt="instagram" />
                        <img src={assets.tiktok_logo_icon} alt="tiktok" />
                    </div>
                </div>
                <div className="content-center">
                    <h2>TEDDY BAKEZ</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>(215)777-5768</li>
                        <li>contact@teddy-bakez.com</li>
                    </ul>
                    {/* Back to Top Button */}
                    <button className="back-to-top" onClick={scrollToTop}>
                        ↑ Back to Top
                    </button>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">
                Copyright 2025 @ TeddyBabez.com - All Rights Reserved
            </p>
        </div>
    );
};

export default Footer;