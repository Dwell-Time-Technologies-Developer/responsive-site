import React from 'react'
import {Button} from '../../Button'
import {Link} from 'react-router-dom'
import './HeroSection.css'
import './contact.css'
import Form from './Form'

function HeroSection({
    lightBg, topLine,lightText,lightTextDesc,headline,description,headline1,description1,
    buttonlabel,img,alt,imgStart,double
}) {
    return (<>
    <div className={lightBg? 'home__hero-section':'home__hero-section darkBg'}>
        <div className="container">
            <div className="row home__hero-row"
            style={{display:'flex',flexDirection: imgStart ==='start' ? 'row-reverse':'row'}}
            >
                <div className="col">
               <div className='footer-links'>
                    <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <p>
      <i class="fa fa-map-marker"></i>Kurumbapalayam,Coimbatore,<br></br> Tamilnadu, India</p>
                        <p><i class="fa fa-phone"></i>+91 99 44 93 7857</p>
                        <p><i class="fa fa-envelope"></i>contactus@dwelltimetechnologies.com</p>
                    </div>
                </div>
                </div>

                <Form/>

                </div>
                <div className="col">
                    <div className="home__hero-img-wrapper">
                        <img className='home__hero-img' src={img} alt={alt}></img>
                    </div>
                </div>
            </div>
        </div>        
    </div>
    </>)
}

export default HeroSection
