import React from 'react'
import { Link } from 'gatsby'

import './Footer.css'
import '../../../static/css/basic-grid.css'

export default () => {
    return (
        <footer className='Footer'>
            <div className='basic-grid auto-fit'>
                <div className ='footer-nav'>
                    <h3>BROOKSIDE SOUND</h3>
                </div>
                <div className='footer-nav'>
                    <Link to='/'>Home</Link>
                    <Link to='/services/'>Services</Link>
                    <Link to='/space/'>Our Space</Link>
                </div>
                <div className='footer-nav'>
                    <Link to='/about/'>About</Link>
                    <Link to='/portfolio/'>Portfolio</Link>
                    <Link to='/contact/'>Contact</Link>
                </div>
            </div>
            <p>Made by <a href='http://travisevans.ca'>Travis Evans</a> ©2020</p>
        </footer>
    )
}
