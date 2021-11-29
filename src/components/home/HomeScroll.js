import React from 'react'
import {content} from '../../data/content'

// let data = {testData}.json

function HomeScroll() {
    console.log(content)
    return (
        <div className='HomeScroll'>
            <h1>{content.projects.landingContent.title}</h1>
        </div>
    )
}

export default HomeScroll
