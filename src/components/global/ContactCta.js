import React from 'react'
import { content } from '../../data/content'


function ContactCta() {
    let data = content.contact
    return (
        <section className='contact-cta'>
            <h2>Get in Touch</h2>
            <p>{data.message}</p>
            <button>{data.email}</button>
            <ul>
                {data.socials.map(social => <li><a href={social.link} target='_blank' rel='noreferrer'>{social.name}</a></li>)}
            </ul>
        </section>
    )
}

export default ContactCta
