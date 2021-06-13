import React from 'react';
import navLogo from '../../Images/navLogo.png';
import './Footer.css';
const Footer = () => {
    return (
        <section className='footer'>
            <div className="container">
                <div className="row">
                <div className="col-md-4 py-5">
                        <div className='d-flex justify-content-center'>
                        <div><img className='navImg' style={{ width: '50px', margin: '0 0'}} src={navLogo} alt="" /></div>
                            <h3 className='brand-name'>Organic</h3>
                        </div>
                        <p className='footer-border text-light py-3'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor
                        </p>
                        <p className='text-light mb-3'>
                            © Copyright 2021 Nature
                        </p>
                </div>
                <div className="col-md-4 py-5">
                        <h4 className='text-light'>Information</h4>
                        <p className='text-light ' href="#">About Us</p>
                        <p className='text-light ' href="#">Products</p>
                        <p className='text-light ' href="#">Contact Us</p>
                        <p className='text-light ' href="#">Terms of Service</p>
                </div>
                <div className="col-md-4 py-5">
                    <h4 className='text-light'>Fellow Us</h4>

                </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;