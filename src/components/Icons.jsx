import React from 'react'
import chat from '../assets/chat.png'
import medication from '../assets/medication.png'
import schedule from '../assets/Schedule.png'
import compliance from '../assets/Compliance.png'
import visit from '../assets/Track-Visit.png'
import './icons.css'


const Icons = () => {
  return (
    <div className="icon-container">
        <div className="item">
            <div className="icon">
                <img src={chat} alt="img" className='icon-img' />
            </div>
            <h1 className='icon-heading'>Messaging</h1>
            <p className="detail">Direct and Group Message your team</p>
        </div>
        <div className="item">
            <div className="icon">
                <img src={medication} alt="img" className='icon-img' />
            </div>
            <h1 className='icon-heading'>Medication</h1>
            <p className="detail">Track supply and medication refills by last requested date by patient's family</p>
        </div>
        <div className="item">
            <div className="icon">
                <img src={schedule} alt="img" className='icon-img' />
            </div>
            <h1 className='icon-heading'>Schedule</h1>
            <p className="detail">Trasparent Scheduling for all team members on shared calendars with mobile access</p>
        </div>
        <div className="item">
            <div className="icon">
                <img src={compliance} alt="img" className='icon-img' />
            </div>
            <h1 className='icon-heading'>Compliance</h1>
            <p className="detail">Ensure compliance by allowing patients to have mobile, up-to date access to their medication list</p>
        </div>
        <div className="item">
            <div className="icon">
                <img src={visit} alt="img" className='icon-img' />
            </div>
            <h1 className='icon-heading'>Track Visit</h1>
            <p className="detail">Track your staff's made visits to each patient</p>
        </div>
        

    </div>
  )
}

export default Icons