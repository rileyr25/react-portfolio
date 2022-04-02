import React from 'react'
import Landing from './home/Landing'
import HomeScroll from './home/HomeScroll'
import ContactCta from '../global/ContactCta'

function Home() {

    return (
        <section className='home mb-20'>
            <Landing />
            <HomeScroll />
            <ContactCta />
        </section>
    )
}

export default Home
