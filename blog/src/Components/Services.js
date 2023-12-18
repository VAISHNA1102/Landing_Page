import React from 'react'
import '../Components/CSS/Services.css'
const Services = () => {
    return (
        <>
        <div className='price'>
            <h1>Our Pricing Model</h1>
            <div className='price_model'>
                <div className='card1'>
                    <h2>For Local Enterprises</h2>
                    <p>Running Google ADs is the best option to enter in field of marketing without hesitations. </p>
                    <p className='money'>$699/month</p>
                    <button className='but'>Book a Call</button>
                </div>
                <div className='card1'>
                    <h2>For Local Enterprises</h2>
                    <p> Google ADs + FB Ads/ other SM Ads depending on the type of business.</p>
                    <p className='money'>$1099/month</p>
                    <button className='but' style={{marginTop:"35px"}}>Book a Call</button>
                </div>
                <div className='card1'>
                    <h2>For Local Enterprises</h2>
                    <p>Whole Inorganic Marketing + Organic reach strategies. </p>
                    <button className='but' style={{marginTop:"95px"}}>Book a Call</button>
                </div>
            </div>
            </div>
        </>
    )
}

export default Services
