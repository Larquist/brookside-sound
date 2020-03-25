import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout/Layout'

import '../../static/css/basic-grid.css'
import '../../static/css/services/services.css'

export default () => {
    return (
        <Layout>
            <main className='Services'>
                <div className='content-container'>
                    <h1>Services</h1>
                    <div className='services-container'>
                        <div className='service'>
                            <h3>Production</h3>
                            <p>Short description here.</p>
                            <ul>
                                <li>Professional level production</li>
                                <li>List item</li>
                                <li>Example text</li>
                            </ul>
                        </div>
                        <div className='service'>
                            <h3>Recording</h3>
                            <p>Short description here.</p>
                            <ul>
                                <li>Professional level production</li>
                                <li>List item</li>
                                <li>Example text</li>
                            </ul>
                        </div>
                        <div className='service'>
                            <h3>Mixing</h3>
                            <p>Short description here.</p>
                            <ul>
                                <li>Professional level production</li>
                                <li>List item</li>
                                <li>Example text</li>
                            </ul>
                        </div>
                    </div>
                    <div className='services-container'>
                        <div className='service'>
                            <h3>Location Sound</h3>
                            <p>Short description here.</p>
                            <ul>
                                <li>Professional level production</li>
                                <li>List item</li>
                                <li>Example text</li>
                            </ul>
                        </div>
                        <div className='service'>
                            <h3>Audio Post Production</h3>
                            <p>Short description here.</p>
                            <ul>
                                <li>Professional level production</li>
                                <li>List item</li>
                                <li>Example text</li>
                            </ul>
                        </div>
                    </div>
                    <div className='pricing'>
                        <p>For estimates please leave us an email <Link to='/contact/'>here.</Link></p>
                    </div>
                </div>
            </main>
        </Layout>
    )
}
