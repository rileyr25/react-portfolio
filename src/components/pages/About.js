import React from 'react'
import ContactCta from '../global/ContactCta'
import { content } from '../../data/content'
import Icon from '../global/Icon'

function About() {
    const skillList = content.about.skills
    console.log(skillList)
    return (
        <main className='h-screen'>
            <section className='px-4 pt-10'>
                <h1 className='text-center py-5'>About Me</h1>
                <p className='text-center'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores illo natus minima voluptatem numquam ipsum velit eaque ea! Labore doloremque nam repellat, temporibus laboriosam cum quam nesciunt harum est molestiae iusto asperiores soluta hic consectetur quaerat laborum omnis vitae nemo!
                </p>
                <div className="skills">
                    <h2>Skills:</h2>
                    <ul>
                        <li>test</li>
                        {skillList.map(skill => {
                            <li><Icon name={skill} /></li>
                        })}
                    </ul>
                </div>
            </section>
            <ContactCta />
        </main>
    )
}

export default About
