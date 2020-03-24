import React from 'react'

import { Link } from 'gatsby'

import './Header.css'

export default () => {
    const active = {
        color: 'white'
    }

    return (
        <header className='Header'>
            <Link to='/' activeStyle={active}>Home</Link>
            <Link to='/services/' activeStyle={active}>Services</Link>
            <Link to='/space/' activeStyle={active}>Our Space</Link>
            <Link to='/about/' activeStyle={active}>About</Link>
            <Link to='/portfolio/' activeStyle={active}>Portfolio</Link>
            <Link to='/contact/' activeStyle={active}>Contact</Link>
        </header>
    )
}
