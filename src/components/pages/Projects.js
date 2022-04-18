import React, { useState, useRef } from 'react'
import { content } from '../../data/content'
import { Link } from 'react-router-dom'
import Icon from '../global/Icon'
import { motion } from 'framer-motion'


function Projects() {
    const IMG_PATH = '/assets/images/'

    let siteData = content.projects.sites
    const [type, setType] = useState('dev')
    
    const toggleType = e => {
        setType(e.target.value)
    }

    const constraintsRef = useRef(null)

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

            <div className='site-display px-4'>
                {siteData.filter(site => site.type === type).map(site => 
                    <div ref={constraintsRef} className="site-card relative my-10 flex even:flex-row-reverse justify-between items-center bg-slate-800">
                        <motion.div 
                            className="image-overlay transition-all duration-500 bg-slate-700 w-[40%] rounded-full"
                            drag='x'
                            dragMomentum={true}
                            dragElastic={0}
                            // dragConstraints={{ top: 0, bottom: 0 }}
                            dragConstraints={constraintsRef}
                            dragSnapToOrigin
                            onDragEnd={
                                (event, info) => console.log(info.point.x, info.point.y)
                            }
                            // dragTransition={{ bounceStiffness: 1000, bounceDamping: 1000 }}
                            
                        >
                            <img src={`${IMG_PATH}${site.images.img1}`} alt="" className='rounded-full aspect-square pointer-events-none'/>
                        </motion.div>

                        <div className="site-info transition-all duration-500">
                            <div className="card-text relative px-2 break-words">
                                <h3 className='text-lg font-bold'>{site.title}</h3>
                                <p>{site.description}</p>
                                    <div className="languages">
                                        <ul className='flex flex-row'>
                                            {site.skills.map(skill =>
                                                <li><Icon name={skill} /></li>
                                            )}
                                        </ul>
                                    </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </main> 
    )
}
{/* <div className="info-bg transition-all duration-200 ease-out absolute -top-6 hover:-top-20 w-full h-[200%] overflow-hidden -skew-y-8 bg-gradient-to-b from-blue-400 to bg-cyan-300"></div> */}

export default Projects
