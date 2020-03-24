import React from 'react'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import './Layout.css'

export default ({children}) => (
    <div>
        <Header />
        <div className='children'>
            {children}
        </div>
        <Footer />
    </div>
)