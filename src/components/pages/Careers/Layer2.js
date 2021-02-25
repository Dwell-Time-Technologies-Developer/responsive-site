import React from 'react'
import { Button } from '../../Button'
import {Link} from 'react-router-dom'

function Layer2() {
    return (
        <div className="container">
        <div className="home__hero-text-wrapper">
            <p class="Layer-2-Head">Join Us Today !</p>
            <p class="Layer-2-Content">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna
            Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation.</p>
            <Link to="/signup" className="Layer-2-btn">
                            <Button buttonSize='btn--wide' buttonColor='blue-border'>Join Us</Button>
                        </Link>
        </div>
        </div>
    )
}

export default Layer2
