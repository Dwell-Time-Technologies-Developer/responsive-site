import React from 'react'
import HeroSection from './HeroSection'
import {homeObjOne,homeObjTwo,homeObjThree,homeObjFour} from './Data'
import Navbar from '../../Navbar'
import Footer from '../Footer/Footer'


function Service() {
    return (
        <>
        <Navbar/>
        <HeroSection {...homeObjOne}/>
        <HeroSection {...homeObjTwo}/>
        <HeroSection {...homeObjThree}/>
        <HeroSection {...homeObjFour}/>
        <Footer/>
        </>
    )
}

export default Service
