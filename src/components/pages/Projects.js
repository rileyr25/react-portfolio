import React from 'react'
import { content } from '../../data/content'
function Projects() {

    let siteData = content.projects.sites
    let siteFilter = 'dev'




    console.log(siteData)

    // TODO: figure out how to access object property 'type' + evaluate value
    // create a button that toggles the 'type' value that is displayed
    // rewrite siteData filter
    return (
        <div>
            <h1>Projects</h1>
            <form>
                <input 
                type="radio"
                id='dev'
                name='project-type'
                value='dev'
                />
            </form>

            {/* {siteData.filter(site => site.type === 'dev').map(site => 
                <div className="site-card">
                    <h3>{site.title}</h3>
                    <p>{site.description}</p>
                </div>
                )} */}


            {siteData.filter(site => site.type === siteFilter).map(site => 
                <div className="site-card">
                    <h3>{site.title}</h3>
                    <p>{site.description}</p>
                </div>
                )}
        </div> 
    )
}

export default Projects
