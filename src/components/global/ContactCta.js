import React from 'react'
import { content } from '../../data/content'
import Icon from './Icon'

function ContactCta() {
    let data = content.contact
    return (
        <section id='contact' className='contact-cta'>
            <h2>Get in Touch</h2>
            <p>{data.message}</p>
            <button><Icon name='email'/>{data.email}</button>
            <ul>
                {data.socials.map(social => <li><Icon name={social.name}/><a href={social.link} target='_blank' rel='noreferrer'>{social.name}</a></li>)}
            </ul>
        </section>
    )
}

export default ContactCta
