import React from 'react'
import HeroSection from './HeroSection'
import HeroSection2 from './HeroSection2'
import {homeObjOne,homeObjTwo,homeObjThree} from './Data'
import Navbar from '../../Navbar'
import Footer from '../Footer/Footer'

function Home() {
    return (
        <>
        <Navbar/>
          <HeroSection {...homeObjOne}/>
          
          <HeroSection2 {...homeObjTwo}/>
          
          <HeroSection2 {...homeObjThree}/>
          
          {/* <HeroSection {...homeObjOne}/> */}
          <Footer/>
        </>
    )
}

export default Home
