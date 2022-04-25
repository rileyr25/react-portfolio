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
        <section id='contact' className='contact-cta text-center m-auto py-12 text-white'>
            <div className=''>
                <h2 className='text-3xl mb-3 font-semibold mt-12'>Get in Touch</h2>
                <p className='mb-5 xs:text-lg px-2 m-auto max-w-lg'>I'm always looking for new challenges and projects to contribute to. Send me an email, let's chat!</p>
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
                    className='w-48 flex justify-center m-auto pb-4 text-lg items-center font-semibold hover:underline'><Icon name='email' class='text-xl mt-1 mx-1'/>{data.email}
                </button>
                </Tippy>
                <ul className='flex justify-center px-3 max-w-sm m-auto'>
                    {data.socials.map(social =>
                    <li className='px-4 w-1/3 transition-opacity hover:opacity-70'>
                        <a className='' href={social.link} target='_blank' rel='noreferrer'>
                            <Icon name={social.name} class='m-auto text-2xl mb-2'/> {social.title}
                        </a>
                    </li>
                    )}
                </ul>
            </div>
        </section>
    )
}

export default ContactCta
