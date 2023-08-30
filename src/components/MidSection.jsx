import React from 'react'
import mobile from '../assets/sliceing.png'
import bars from '../assets/bars.png'
import './midsection.css'

const MidSection = () => {
  return (
    <div className="mid-container">
        <div className="item-left">
            <img src={mobile} alt="mobile" className='mid-mobile'/>
        </div>
        <div className="item-right">
            <div className="sub-item">
                <h2 className="heading-2">
                OUR AMAZING SERVICES
                </h2>
                <h1 className="heading-1">
                Engage the families you serve
                </h1>
                <img src={bars} alt="image-bar" className='image-bar'/>
            </div>
            <div className="sub-item">
                <h2 className="mid-heading">
                   ELIMINATE HANDWRITTEN MEDICATION LISTS
                </h2>
                <h2 className="heading-light">
                Patients and families deserve to have up to date, mobile access to their latest medication list
                </h2>
            </div>
            <div className="sub-item">
                <h2 className="mid-heading">
                  EMPOWER THE FAMILIES YOU SERVE
                </h2>
                <h2 className="heading-light">
                Families can now have mobile access to your team's visiting schedule and can also request medication and supply refills with a touch of a button
                </h2>
            </div>
            <div className="sub-item">
                <h2 className="mid-heading">
                 ACCESS TO IMPORTANT DOCUMENTS 
                </h2>
                <h2 className="heading-light">
                Allow families to have mobile access to important documents such as consents, plan of care, etc.
                </h2>
            </div>
            <div className="sub-item">
                <h2 className="mid-heading">
                   KEEP OTHER FAMILY MEMBERS IN THE LOOP
                </h2>
                <h2 className="heading-light">
                Allow your patients' POA to invite other family members to have mobile access of their loved one's profile
                </h2>
            </div>

        </div>


    </div>
  )
}

export default MidSection