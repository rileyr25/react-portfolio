import React, { useState } from 'react'
import { content } from '../../data/content'
function Projects() {

    let siteData = content.projects.sites
    const [type, setType] = useState('dev')
    
    const toggleType = e => {
        setType(e.target.value)
    }

    // TODO: figure out how to access object property 'type' + evaluate value
    // create a button that toggles the 'type' value that is displayed
    // rewrite siteData filter
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
                <input 
                type="radio"
                id='design'
                name='project-type'
                value='design'
                onClick={toggleType}
                />
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
