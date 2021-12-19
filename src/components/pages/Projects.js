import React from 'react'
import { content } from '../../data/content'
function Projects() {

    let siteData = content.projects.sites

    return (
        <div>
            <h1>Projects</h1>
            
            {siteData.map(site => 
                <div className="site-card">
                    <h3>{site.title}</h3>
                    <p>{site.description}</p>
                </div>
                )}
        </div>
    )
}

export default Projects
