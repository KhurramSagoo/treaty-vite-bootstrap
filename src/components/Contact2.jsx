import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React from 'react'
import bars from '../assets/bars.png'
import phone from '../assets/Phone.png'
import envelope from '../assets/Envelope.png'
import pointer from '../assets/Pointer.png'
import fb from '../assets/fb.png'
import twitter from '../assets/twitter.png'
import insta from '../assets/instagram.png'
import youtube from '../assets/youtube.png'
import Button from 'react-bootstrap/Button';
import './contact2.css'

function Contact2() {
  return (
    <Form className=' container-fluid bg-secondary'>
      <Row>
        <Col lg={4} md={6} sm={6} as={Col} xs={12} className=' p-5'>
          <h2 >
            STAY IN TOUCH
          </h2>
          <h2 >
            Contact us
          </h2>
          <img src={bars} alt="bars" />

          <div >
            <p className='p-info'><span><img src={phone} alt="mobile-icon" className='mobile-icon' /></span>1-541-754-3010</p>
            <p className='p-info'><span><img src={envelope} alt="mobile-icon" className='mobile-icon' /></span>support@jointreaty.com</p>
            <p className='p-info'><span><img src={pointer} alt="mobile-icon" className=' w-25 mx-2'  /></span>3782 Shady Pines Drive USA</p>

          </div>
          <img src={fb} alt="social-icon" className=' w-25' />
          <img src={twitter} alt="social-icon" className=' w-25' />
          <img src={insta} alt="social-icon" className=' w-25' />
          <img src={youtube} alt="social-icon" className=' w-25' />
        </Col>
        <Col lg={4} md={6} xs={12} sm={6} className=' p-5'>
          <Form.Control placeholder="Name" className=' my-3 p-3' />
          <Form.Control placeholder="Email" className=' my-3 p-3' />
          <Form.Control placeholder="Subject" className=' my-3 p-3' />
        </Col>
        <Col lg={4} md={6} xs={12} sm={6} className=' p-5 my-3'>
          <Form.Control placeholder="Message" as="textarea" rows="8" cols="40" className='txt-area' />
          <Button variant="primary" >Send Message</Button>{' '}
          {/* <textarea placeholder='MESSAGE*' class='textarea-msg' rows='8' cols='40'></textarea> */}

          {/* <button className='contact-btn'>SEND MESSAGE</button> */}
        </Col>
        {/* <Col>
          <Form.Control placeholder="Last name" />
        </Col> */}
      </Row>
    </Form>
  );
}

export default Contact2;