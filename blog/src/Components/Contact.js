import React from 'react'
import '../Components/CSS/Contact.css'

const Contact = () => {
    return (

        <div className="container-fluid">
            <h1>Contact</h1>
            <div className="contact">
                <div className="CLeft">
                    
                </div>
                <div className="CRight">
                    <div className="text">
                        <h4>SCHEDULE YOUR CALL WITH US<br />
                            <span style={{ color: 'grey' }}>Free 15-Minute Audit Call</span></h4>
                        <p className='para'>By the end of this audit call, you'll have a clear understanding of the next steps you can take to reach new highs and thrive with your business.
                            Find a time on our calendar to schedule your call today and we look forward to speaking to you soon!
                        </p>
                    </div>
                    <h5 style={{color: '#   '}}>THIS AUDIT CALL IS PERFECT FOR:</h5>
                    <ul>
                        <li>
                            Businesses looking for an agency that puts results and profits first.
                        </li>
                        <li>
                            Businesses looking to stay one step ahead of the competition.
                        </li>
                        <li>
                            Business looking to scale exponentially using proven methods that works.
                        </li>
                        <li>
                            Businesses looking to run ads profitably.
                        </li>
                    </ul>
                </div>
            </div>
        </div>


    )
}

export default Contact
