import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import bars from '../assets/bars.png'
import phone from '../assets/Phone.png'
import envelope from '../assets/Envelope.png'
import pointer from '../assets/Pointer.png'
import fb from '../assets/fb.png'
import twitter from '../assets/twitter.png'
import insta from '../assets/instagram.png'
import youtube from '../assets/youtube.png'
import './contact-form.css'

const ContactForm = () => {
    return (

        <div className="container p-5 ">
            <div className="row" style={{
                padding: "86px 0 86px 0"
            }}>
                <div className="col-lg-5 col-md-5 col-sm-12  d-flex flex-column align-items-sm-center align-items-center   ">
                    <div className=" d-flex align-items-baseline flex-column   ">
                        <h2 className=" text-info">
                            STAY IN TOUCH
                        </h2>
                        <h1 className="second-heading">
                            Contact us
                        </h1>
                        <img src={bars} alt="bars" className='form-bar' />
                    </div>
                    <div className="form-info-icon-div flex-column align-items-start pt-5  ">

                        <div style={{
                            display: "flex",
                            alignItems: "flex-start",
                        }} >
                            <img src={phone} alt="mobile-icon" className='form-info-icon' />
                            <p className='form-info-p'>1-541-754-3010</p>
                        </div>

                        <div style={{
                            display: "flex",
                            alignItems: "flex-start",
                        }} >
                            <img src={pointer} alt="mobile-icon" className='form-info-icon' />
                            <p className='form-info-p ' id='form-info-p'>3782 Shady Pines Drive USA</p>

                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "flex-start",
                        }} >
                            <img src={envelope} alt="mobile-icon" className='form-info-icon' />
                            <p className='form-info-p' id='form-info-p'>
                                support@jointreaty.com</p>
                        </div>
                    </div>
                    <div className=" d-flex justify-content-start align-items-start  ">
                        <img src={fb} alt="social-icon" className='form-social-icon' />
                        <img src={twitter} alt="social-icon" className='form-social-icon' />
                        <img src={insta} alt="social-icon" className='form-social-icon' />
                        <img src={youtube} alt="social-icon" className='form-social-icon' />
                    </div>
                </div>
                {/* right portion */}
                <div className=" col-lg-7 col-md-7 col-sm-12 d-flex flex-lg-row flex-md-row flex-sm-row flex-column flex-row shadow p-sm-4 p-4 px-lg-5 p-md-5 my-md-4 mt-sm-5 mt-5">
                    <div className=" col col-lg-6  col-md-6 col-sm-6 col-12 pe-lg-3  pe-md-2 pe-sm-2" id='form-left-input-div'>
                        <Form.Control size="lg" type="text" placeholder="NAME**" className=' mb-4  form-left-input' id='' />
                        <Form.Control size="lg" type="text" placeholder="EMAIL*" className=' mb-4 form-left-input' />
                        <Form.Control size="lg" type="text" placeholder="SUBJECT*" className=' mb-4 form-left-input ' />
                    </div>
                    <div className=" col d-flex flex-column  col-lg-6 col-md-6 col-sm-6 col-12 align-items-end ps-lg-3 ps-md-2 ps-sm-2" id='form-right-input-div'>
                        <Form.Control size="lg" type="text" placeholder="MESSAGE*" as='textarea' rows={7} className='form-right-text-area' />
                        {/* <textarea placeholder='MESSAGE*' className='' rows='8' cols='40'></textarea> */}
                        <Button variant="info" className=' rounded text-white' style={{
                            backgroundColor:"skyblue",
                            float:"right",
                            margin:"40px 0",
                            width:"200px",
                            padding:"20px 10px",
                        }}>SEND MESSAGE</Button>{' '}
                        {/* <button className=''>SEND MESSAGE</button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContactForm