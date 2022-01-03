import React, { useState } from 'react'
import { content } from '../../data/content'

import { icons } from 'react-icons'
function Projects() {

    let siteData = content.projects.sites
    const [type, setType] = useState('dev')
    
    const toggleType = e => {
        setType(e.target.value)
    }

    return (
        <div>
            <h1>Projects</h1>
            <div className='type-toggle'>
                <input 
                type="radio"
                id='dev'
                name='project-type'
                value='dev'
                defaultChecked
                onClick={toggleType}
                />
                <label for="dev">Development</label>
                <input 
                type="radio"
                id='design'
                name='project-type'
                value='design'
                onClick={toggleType}
                />
                <label for="design">Design</label>
            </div>
            <div className='site-display'>
                {siteData.filter(site => site.type === type).map(site => 
                    <div className="site-card">
                        <h3>{site.title}</h3>
                        <p>{site.description}</p>
                            <div className="languages">
                                <ul>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                    </div>
                )}
            </div>
        </div> 
    )
}

export default Projects
