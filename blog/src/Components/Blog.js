import React from 'react'
import '../Components/CSS/Blog.css'
import Google from '../Img/Google.jpg';
import Social_Media from '../Img/social.jpg';
import ORM from '../Img/ORM.jpg';
import Image from '../Img/FSC.jpg'
const Blog = () => {
    return (
        <>
            <h1>Our Specialization </h1>
            <div className='specialization'>
                <div className='card'>
                    <img src={Google} alt="Google" className='specialization_Image' />
                    <h2>Google Ads</h2>
                    <p>Marketing is all about reaching the people who are interested in buying your product. What better way to reach those individuals than advertising on the most popular search engine? </p>
                </div>
                <div className='card'>
                    <img src={Social_Media} alt="Social_Media" className='specialization_Image' />
                    <h2>Social Media Marketing</h2>
                    <p> Leverage the power of popular platforms to engage, build brand loyalty, and foster connections. Social media ensures your message hits the mark. </p>
                </div>
                <div className='card'>
                    <img src={ORM} alt="ORM_Management" className='specialization_Image' />
                    <h2>ORM Management</h2>
                    <p>Online Reputation Management (ORM),think of it as your brand's superhero cape. In this hyper-connected world, a single comment can pack a punch. </p>
                </div>
            </div>

            <section id="casestudy">
                <div className="container-fluid">
                    <h1>Free Case Study</h1>
                    <div className="Box">
                        <div className="left">
                            <img src={Image} alt="" className='SImage' />
                        </div>
                        <div className="right">
                            <div className="text">
                                Here is a sample case study on how our <br/>agency approaches a particular business <br/>and increases the return you're <br/>getting on your AdSpend.
                            </div>
                            <ul className="points">
                                <li>
                                    Discover Effortless Ways to Tap into Highly Relevant and Targeted Traffic.
                                </li>
                                <li>
                                    The Critical Importance of Infusing a Personal Touch into Your Ad Campaigns.
                                </li>
                                <li>
                                    Unveiling the Power of AI: Automatically Showcasing the Most Relevant Products to Your Audience.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog
