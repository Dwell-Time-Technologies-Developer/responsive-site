import React from 'react'
import HeroSection from './HeroSection'
import {homeObjOne,homeObjTwo,homeObjThree,homeObjFour} from './Data'
import Layer2 from './Layer2'
import Navbar from '../../Navbar'
import Footer from '../Footer/Footer'

function Careers() {
    return (
        <>
        <Navbar/>
        <HeroSection {...homeObjOne}/>
        <Layer2/>
        <Footer/>
        </>
    )
}

export default Careers
