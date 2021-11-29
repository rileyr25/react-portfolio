import React from 'react'
import {content} from '../../data/content'

// let data = {testData}.json

function HomeScroll() {
    console.log(content)
    let proData = content.projects.landingContent
    let labData = content.lab.landingContent
    return (
        <div className='HomeScroll'>
            <section className="home-projects">
                <h1>{proData.title}</h1>
                <p>{proData.excerpt}</p>
            </section>

            <section className="home-lab">
                <h1>{labData.title}</h1>
                <p>{labData.excerpt}</p>
            </section>
        </div>
    )
}

export default HomeScroll
