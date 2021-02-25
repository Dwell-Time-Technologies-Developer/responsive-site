import React from 'react'
import {Button} from '../../Button'
import {Link} from 'react-router-dom'
import './HeroSection.css'

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
                    <div className="home__hero-text-wrapper">
                        {double ?(
                            <>
                            <div className="top-line">{topLine}</div>
                        <h1 className={lightText? 'heading' : ' heading dark'}>{headline}</h1>
                        <p className={lightTextDesc? 'home__hero-subtitle':'home__hero-subtitle dark'}>{description}</p>
                       </>
                        ):(<>
                        <div className="top-line">{topLine}</div>
                        <h1 className={lightText? 'heading' : ' heading dark'}>{headline}</h1>
                        <p className={lightTextDesc? 'home__hero-subtitle':'home__hero-subtitle dark-text'}>{description}</p>
                        <div className="top-line">{topLine}</div>
                        <h1 className={lightText? 'heading' : ' heading dark'}>{headline1}</h1>
                        <p className={lightTextDesc? 'home__hero-subtitle':'home__hero-subtitle dark-text'}>{description1}</p>
                      
                       
                        </>)}
                        
                        

                    </div>
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
