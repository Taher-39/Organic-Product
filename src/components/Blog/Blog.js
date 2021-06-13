import React from 'react';
import LeafeImg from '../../Images/leafeLogo.png';
import eucalyptusEssential from '../../Images/eucalyptus-essential.png';
import pottedPlant from '../../Images/potted-plant-near-cosmetics-bottles-jars.png';
import containerProduct from '../../Images/containerProduct.png';
import './Blog.css'
const Blog = () => {
    const blogData = [
        {
            id: 1,
            blogImg: eucalyptusEssential,

        },
        {
            id: 2,
            blogImg: pottedPlant,

        },
        {
            id: 3,
            blogImg: containerProduct,

        }
    ]
    return (
        <section>
            <div className="text-center">
                <img src={LeafeImg} alt="" style={{ width: '30px' }} />
                <h2 className='py-3 text-color'>Read Our Blog</h2>
                <p className='text-color'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
            <div className="container">
                <div className="row pt-5">
                    {
                        blogData.map(blogCard =>
                            <section className="col-md-4 d-flex justify-content-center my-4">
                                    <div>
                                        <img style={{ height: '300px', width: '270px'}} src={blogCard.blogImg} alt="" />
                                        <div className="text-center">
                                            <h2 className='py-3' style={{ color: '#00dbd0'}}>Blog Post One</h2>
                                            <p className='text-color'>
                                                Lorem ipsum dolor sit amet, <br />
                                                consectetur adipiscing elit, sed <br />
                                                do eiusmod.
                                            </p>
                                            <p className='btn text-color read-more-btn'>Read More</p>
                                        </div>
                                    </div>
                            </section>
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Blog;