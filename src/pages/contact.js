import React from 'react'

import Layout from '../components/Layout/Layout'

import '../../static/css/contact/contact.css'

export default () => {
    return (
        <Layout>
            <main className='Contact'>
                <h1>Contact Us</h1>
                <form className='contact-form'>
                    <label for='name'>Name</label>
                    <input type='text' placeholder='Name..' id='nameForm' />
                    <label for='email'>Email</label>
                    <input type='text' placeholder='Email..' id='emailForm' />
                    <label for='inquiry'>Inquiry</label>
                    <select id='inquiry'>
                        <option>Select an inquiry..</option>
                        <option value='production'>Production</option>
                        <option value='recording'>Recording</option>
                        <option value='mixing'>Mixing</option>
                    </select>
                    <label for='message'>Message</label>
                    <textarea id='message' rows='10'></textarea>
                    <div className='form-buttons'>
                        <input type='submit' value='Submit' />
                        <input type='reset' value='Clear' />
                    </div>
                </form>
            </main>
        </Layout>
    )
}
