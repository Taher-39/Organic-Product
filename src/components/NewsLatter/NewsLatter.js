import React from 'react';
import woman from '../../Images/woman.png';
import doubleComma from '../../Images/doubleComma.png';
import './NewsLatter.css'
const NewsLatter = () => {
    return (
        <section className='newsletter-feedback' style={{minHeight: '600px'}}>
            <article>
                <div className="text-center">
                    <div className='p-5'>
                        <img src={doubleComma} alt="" />
                    </div>
                    <img className='feedback-parson' src={woman} alt="" style={{ width: '150px', height: '150px' }} />
                    <h2 className='py-3 text-color'>Jane Doe</h2>
                    <div className='pb-3'>🤍🤍🤍🤍🤍</div>
                    <p className='text-color feedback'>
                        Thank you for all the amazing produce and products you deliver each week…<br />
                        you make my life so easy an bring goodness into our family eating. <br />
                        I’ve been roasting a lot of brussel sprouts and
                    </p>
                </div>
            </article>
            <main className='news-letter mt-5 pt-5'>
                <div className="text-center">
                    <h2 className='py-3 text-color'>Subscribe to Our Newsletter</h2>
                    <p className='text-color'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className='m-5 p-3'>
                        <input type="text" placeholder='Enter your email address' />
                        <input type="submit" value='Subscribe' />
                        {/* <input className='form-control w-50' type="text" name="" id="" placeholder='Enter your email address' />
                        <span> <button className='btn btn-color text-light'>Subscribe</button> </span> */}
                    </div>
                </div>
            </main>
        </section>
    );
};

export default NewsLatter;