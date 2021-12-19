import React from 'react'
import { content } from '../../data/content'
function Projects() {

    let siteData = content.projects.sites
    let siteFilter = ''
    return (
        <div>
            <h1>Projects</h1>
            
            {siteData.filter(site => site.type === {siteFilter}).map(site => 
                <div className="site-card">
                    <h3>{site.title}</h3>
                    <p>{site.description}</p>
                </div>
                )}
        </div>
    )
}

export default Projects
