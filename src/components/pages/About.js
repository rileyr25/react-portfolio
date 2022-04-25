import React from 'react'
import ContactCta from '../global/ContactCta'
import { content } from '../../data/content'
import Icon from '../global/Icon'

function About() {
    const skillList = content.about.skills

    return (
        <main className='min-h-screen'>
            <section className='about px-8 py-10 m-auto max-w-3xl'>
                <h1 className='text-center py-5'>About Me</h1>
                <p className='text-center text-lg'>
                    Hi, I'm Riley Robertson, a front-end web developer and designer based in Vancouver, Canada. After graduating from BCIT's Front-End Web Developer Program, I gained valuable hands on experience building and designing a variety of projects in different languages. I'm very creative and enjoy the process of problem solving that comes with building front-end user interfaces. I am always looking to expand my skillset and learn new tools and technologies!
                </p>
                <div className="skills pt-14 text-center">
                    <h2 className='text-2xl pb-4'>Skills:</h2>
                    <ul className='flex flex-wrap max-w-lg m-auto justify-evenly'>
                        {skillList.map(skill => 
                            <li className='py-2 w-[90px]'><Icon name={skill} class='text-2xl m-auto' /><p className='mt-1 mx-auto sm:text-lg'>{skill}</p></li>
                        )}
                    </ul>
                </div>
            </section>
            <div className=''>
            <ContactCta />
            </div>
        </main>
    )
}

export default About
