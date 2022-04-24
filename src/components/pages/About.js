import React from 'react'
import ContactCta from '../global/ContactCta'
import { content } from '../../data/content'
import Icon from '../global/Icon'

function About() {
    const skillList = content.about.skills
    console.log(skillList)
    return (
        <main className=''>
            <section className='px-8 py-10 m-auto max-w-3xl'>
                <h1 className='text-center py-5'>About Me</h1>
                <p className='text-center'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores illo natus minima voluptatem numquam ipsum velit eaque ea! Labore doloremque nam repellat, temporibus laboriosam cum quam nesciunt harum est molestiae iusto asperiores soluta hic consectetur quaerat laborum omnis vitae nemo!
                </p>
                <div className="skills">
                    <h2 className='text-2xl'>Skills:</h2>
                    <ul className='flex flex-wrap max-w-lg m-auto justify-center'>
                        {content.about.skills.map(skill => 
                            <li className='px-4 py-2'><Icon name={skill} class='text-2xl m-auto' /><p className='mt-1 mx-auto sm:text-lg'>{skill}</p></li>
                        )}
                    </ul>
                </div>
            </section>
            <ContactCta />
        </main>
    )
}

export default About
