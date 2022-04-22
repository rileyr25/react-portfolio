import { useState } from 'react'
import { content } from '../../data/content'
import Icon from './Icon'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/material.css';

function ContactCta() {
    let [message, setMessage] = useState('Copy to Clipboard')

    let resetMessage = () => {
        setMessage('Copy to Clipboard')
    }
    let data = content.contact
    return (
        <section id='contact' className='contact-cta text-center max-w-55rem m-auto'>
            <h2 className='text-2xl font-semibold'>Get in Touch</h2>
            <p className='mb-5'>{data.message}</p>
            <Tippy
                content={message}
                arrow={true}
                hideOnClick={false}
                onHidden={resetMessage}
            >
            <button 
                onClick={() => {
                    navigator.clipboard.writeText(data.email)
                    setMessage('Copied!')
                }}
                className='w-48 flex justify-center m-auto pb-4 text-lg items-center'><Icon name='email' class='text-xl mt-1 mx-1'/>{data.email}
            </button>
            </Tippy>
            <ul className='flex justify-center p-3'>
                {data.socials.map(social => 
                <li className='px-4'>
                    <a href={social.link} target='_blank' rel='noreferrer'>
                        <Icon name={social.name} class='m-auto text-2xl mb-2'/> {social.title}
                    </a>
                </li>
                )}
            </ul>
        </section>
    )
}

export default ContactCta
