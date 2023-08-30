import React from 'react'
import bars from '../assets/bars.png'
import phone from '../assets/Phone.png'
import envelope from '../assets/Envelope.png'
import pointer from '../assets/Pointer.png'
import fb from '../assets/fb.png'
import twitter from '../assets/twitter.png'
import insta from '../assets/instagram.png'
import youtube from '../assets/youtube.png'
import './contact.css'

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-left">
                <div className="contact-header">
                    <h2 className="contact-heading-one">
                        STAY IN TOUCH
                    </h2>
                    <h2 className="contact-heading-two">
                        Contact us
                    </h2>
                    <img src={bars} alt="bars" className='contact-bars' />
                </div>

                <div className="contact-info">
                    <p className='p-info'><span><img src={phone} alt="mobile-icon" className='mobile-icon' /></span>1-541-754-3010</p>
                    <p className='p-info'><span><img src={envelope} alt="mobile-icon" className='mobile-icon' /></span>support@jointreaty.com</p>
                    <p className='p-info'><span><img src={pointer} alt="mobile-icon" className='mobile-icon' /></span>3782 Shady Pines Drive USA</p>
                </div>

                <div className="contact-icon">
                    <img src={fb} alt="social-icon" className='social-icon' />
                    <img src={twitter} alt="social-icon" className='social-icon' />
                    <img src={insta} alt="social-icon" className='social-icon' />
                    <img src={youtube} alt="social-icon" className='social-icon' />
                </div>

            </div>

            <div className="contact-right">
                <div className="input-left">
                    <input type="text" placeholder='NAME*' className='input-form' />
                    <input type="text" placeholder='EMAIL*' className='input-form' />
                    <input type="text" placeholder='SUBJECT*' className='input-form' />
                </div>

                <div className="input-right">
                    <textarea placeholder='MESSAGE*' class='textarea-msg' rows='8' cols='40'></textarea>

                    <button className='contact-btn'>SEND MESSAGE</button>
                </div>

            </div>



        </div>


    )
}

export default Contact