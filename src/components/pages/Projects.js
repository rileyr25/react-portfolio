import React, { useState } from 'react'
import { content } from '../../data/content'
import Icon from '../global/Icon'


function Projects() {
    const IMG_PATH = '/assets/images/'

    let siteData = content.projects.sites
    const [type, setType] = useState('dev')
    
    const toggleType = e => {
        setType(e.target.value)
    }

    return (
        <main>
            <div className="project-heading text-center py-10">
                <h1 className='py-5'>Projects</h1>
                <div className='type-toggle p-1 m-auto w-4/5 max-w-2rem overflow-hidden rounded-xl border-gray-300 dark:border-zinc-800 border border-solid flex font-semibold'>
                    <input
                    type="radio"
                    id='dev'
                    name='project-type'
                    value='dev'
                    defaultChecked
                    onClick={toggleType}
                    className='invisible hidden absolute'
                    />
                    <label for="dev" className='p-2 md:py-3 w-1/2 rounded-lg mr-1 text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white'>Development</label>
                    <input
                    type="radio"
                    id='design'
                    name='project-type'
                    value='design'
                    onClick={toggleType}
                    className='invisible hidden absolute'
                    />
                    <label for="design" className='p-2 md:py-3 w-1/2 rounded-lg ml-1 text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white'>Design</label>
                </div>
            </div>

            <div className='site-display'>
                {siteData.filter(site => site.type === type).map(site => 
                    <div className="site-card">
                        <div className="site-info">
                            <img src={`${IMG_PATH}${site.images.img1}`} alt="" />
                            <h3>{site.title}</h3>
                            <p>{site.description}</p>
                                <div className="languages">
                                    <ul>
                                        {site.skills.map(skill =>
                                            <li><Icon name={skill} /></li>
                                        )}
                                    </ul>
                                </div>
                        </div>
                    </div>
                )}
            </div>
        </main> 
    )
}

export default Projects
