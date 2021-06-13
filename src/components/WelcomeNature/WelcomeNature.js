import React from 'react';
import foodImg from '../../Images/organicFood.png';
import foodImgWithColor from '../../Images/organicFoodWithColor.png';
import LeafeImg from '../../Images/leafeLogo.png';
import './WelcomeNature.css';

const WelcomeNature = () => {
    const welcomeData = [
        {
            id: 1,
            foodCardImg: foodImg,

        },  
        {
            id: 2,
            foodCardImg: foodImgWithColor,

        },
        {
            id: 3,
            foodCardImg: foodImg,

        },
        {
            id: 4,
            foodCardImg: foodImg,

        }]
    return (
        <section className='welcome-nature'>
            <div className="text-center">
                <img src={LeafeImg} alt="" style={{width: '30px'}}/>
                <h2 className='py-3 text-color'>Welcome to Nature</h2>
                <p className='text-color'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
            <div className="container d-flex justify-content-center">
                <div className="row pt-5">
                    {
                        welcomeData.map(welcomeCard =>
                            <section className='col-md-3 text-center'>
                                <img src={welcomeCard.foodCardImg} alt="" style={{ width: '200px', margin: '10px 20px' }} />
                            </section>
                             )
                    }
                </div>
            </div>
        </section>
    );
};

export default WelcomeNature;