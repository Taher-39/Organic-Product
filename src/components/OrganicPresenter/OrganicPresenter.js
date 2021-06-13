import React from 'react';
import './OrganicPresenter.css';
import presenterImg1 from '../../Images/presenterImg1.png';
import presenterImg2 from '../../Images/presenterImg2.png';
import presenterImg3 from '../../Images/presenterImg3.png';

const OrganicPresenter = () => {
    const presenterData = [
        {
            id: 1,
            presenterDataImg: presenterImg1,

        },
        {
            id: 2,
            presenterDataImg: presenterImg3,

        },
        {
            id: 3,
            presenterDataImg: presenterImg2,

        },
        {
            id: 4,
            presenterDataImg: presenterImg3,

        },
        {
            id: 5,
            presenterDataImg: presenterImg1,

        }
    ]
    return (
        <section className='organic-presenter'>
            <div className="text-center">
                <h2 className='py-3 text-color'>Proudly presented by</h2>
                <p className='text-color'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
            <div className="container d-flex justify-content-center">
                <div className="row pt-5">
                    {
                        presenterData.map(presenterCard =>
                            <section className='col-md-2'>
                                <img src={presenterCard.presenterDataImg} alt="" style={{ width: '150px', margin: '30px', marginLeft: '100px' }} />
                            </section>
                             
                             )
                    }
                </div>
            </div>
        </section>
    );
};

export default OrganicPresenter;