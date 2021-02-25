import React from 'react'

import HeroSection from './HeroSection'
import {homeObjOne,homeObjTwo,homeObjThree,homeObjFour} from './Data'
import Navbar from '../../Navbar'
import Footer from '../Footer/Footer'

function ConatctUs() {
    return (
        <>
        <Navbar/>
        <HeroSection {...homeObjOne}/>
        <Footer/>
        </>
    )
}

export default ConatctUs
