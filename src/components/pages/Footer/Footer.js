import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'

import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin
  } from 'react-icons/fa';

function Footer() {
    return (
        <div>
            <footer class="footer">
  <div class="footer-left col-md-4 col-sm-6">
    <p class="about">
      <span> About the company</span> Ut congue augue non tellus bibendum, in varius tellus condimentum. In scelerisque nibh tortor, sed rhoncus odio condimentum in. Sed sed est ut sapien ultrices eleifend. Integer tellus est, vehicula eu lectus tincidunt,
      ultricies feugiat leo. Suspendisse tellus elit, pharetra in hendrerit ut, aliquam quis augue. Nam ut nibh mollis, tristique ante sed, viverra massa.
    </p>
    <section className='social-media'> 
        <div className='social-media-wrap'>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
              className='social-icon-link'
              to={
                '//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber'
              }
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    
  </div>
  <div class="footer-center col-md-4 col-sm-6">
    <div>
      <i class="fa fa-map-marker"></i>
      <p>Kurumbapalayam,<br></br>
                        Coimbatore, Tamilnadu, India</p>
    </div>
    <div>
      <i class="fa fa-phone"></i>
      <p> +91 99 44 93 7857</p>
    </div>
    <div>
      <i class="fa fa-envelope"></i>
      <p><a href="#">contactus@dwelltimetechnologies.com</a></p>
    </div>
  </div>
  <div class="footer-right col-md-4 col-sm-6">
    <h2>Dwell Time<br></br>
    <span>TECHNOLOGIES</span></h2>
    <p class="menu">
    {/* <Link to="/"> Home</Link> |  */}
    <Link to="/about"> About</Link> | 
    <Link to="/service"> Services</Link> | 
    <Link to="/product"> Products</Link> | 
    <Link to="/"> Acadamics</Link> | 
    <Link to="/careers"> Careers</Link> | 
    <Link to="/contactus"> Contact</Link> |
    </p>
    <p class="name"> Copyright © 2021 Dwell Time Technologies. All rights reserved.</p>
  </div>
</footer>
        </div>
    )
}

export default Footer
