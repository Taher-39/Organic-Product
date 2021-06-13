import React from 'react';
import './Header.css';
import headerFlower from "../../Images/bodyFlower.png";

const Header = () => {
    return (
        <header className='header'>
            <div className="row d-flex align-items-center container" style={{ margin: "0 100px"}}>
                <div className="col-md-6">
                    <p className='text-size text-color'>Healthy life with</p>
                    <h1 style={{ color: '#3A4256' }}>Nature Organic</h1>
                    <p className='text-color pt-4 pb-2'>
                        Vegetables are the edible parts of a plant <br/>
                        that is used in cooking or can be eaten now.
                    </p>
                    <button className="btn btn-color text-light">Explore Now</button>
                </div>
                <div className="col-md-6 d-none d-md-block">
                    <img src={headerFlower} alt="" className='img-fluid header-img' />
                </div>
            </div>
        </header>
    );
};

export default Header;