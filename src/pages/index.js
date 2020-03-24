import React from "react"
import { Link } from 'gatsby'

import Layout from '../components/Layout/Layout';

import '../../static/css/index/index.css';
import '../../static/css/index/responsive/index-responsive.css';

export default () => (
    <Layout>
        <main className='Index'>
            <div className='landing'>
                <h1 className='brand'>BROOKSIDE SOUND</h1>
                <p className='landing-blurb'>Officia esse cupidatat consequat voluptate sint nulla dolor dolor non. Nulla excepteur nisi nisi consectetur amet cupidatat Lorem. Commodo consectetur ullamco consectetur amet nulla tempor enim mollit excepteur nisi.</p>
                <div className='landing-buttons'>
                    <button>
                        <Link to='/services/'>Our Services</Link>
                    </button>
                    <button>
                        <Link to='/portfolio/'>Our Portfolio</Link>
                    </button>
                </div>
            </div>
        </main>
    </Layout>
)
