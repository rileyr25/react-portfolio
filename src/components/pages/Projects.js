import React, { useState, useRef } from 'react'
import { content } from '../../data/content'
import Icon from '../global/Icon'
import { motion } from 'framer-motion'
import { InformationCircleIcon } from '@heroicons/react/outline'
import { MdOutlineSwipe } from 'react-icons/md'



function Projects() {
    const IMG_PATH = '/assets/images/'

    let siteData = content.projects.sites
    const [type, setType] = useState('dev')
    
    const toggleType = e => {
        setType(e.target.value)
    }

    return (
        <main className='pb-10'>
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
                    <label htmlFor="dev" className='p-2 md:py-3 w-1/2 rounded-lg mr-1 text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white'>Development</label>
                    <input
                    type="radio"
                    id='design'
                    name='project-type'
                    value='design'
                    onClick={toggleType}
                    className='invisible hidden absolute'
                    />
                    <label htmlFor="design" className='p-2 md:py-3 w-1/2 rounded-lg ml-1 text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white'>Design</label>
                </div>
            </div>

            <div className="slide flex text-md justify-center items-center text-gray-600">
                {/* <InformationCircleIcon className='w-5 mr-1' /> */}
                <MdOutlineSwipe className='w-5 mr-1' />
                <p>Swipe Device to Visit</p>
            </div>

            <div className='site-display px-4'>
                {siteData.filter(site => site.type === type).map(site => 
                    <div className="site-card mx-auto my-6 bg-slate-300 dark:bg-zinc-900 p-2 rounded-xl max-w-lg grid grid-cols-[35%_1fr] grid-rows-4">
                        <div className='rounded-full mr-4 row-span-3 self-center'>
                        <motion.img 
                            className='site-card-img'
                            drag='x'
                            dragSnapToOrigin
                            onDragEnd={
                                (event, info) => {
                                    if(info.offset.x > 140) {
                                        window.open(site.liveLink, '_blank');
                                    }

                                    // TODO: FIX OPEN IN NEW TAB SAFARI

                                    // window.location.assign(site.liveLink)

                                    // const windowRef = window.open();

                                    // myService.getUrl().then(function(url) {
                                    //     windowRef.location = url;
                                    // });
                                }
                            }
                            dragConstraints={{top: 0, bottom: 0, left: 0}}
                            whileHover={{ cursor: "grab",}}
                            whileDrag={{ scale: 1.1, cursor: "grabbing" }}
                            whileTap={{scale: 0.9, cursor: "grabbing" }}
                            src={`${IMG_PATH}${site.images.img1}`}
                            alt=""
                        />
                        </div>
                        
                                <h3 className='site-title text-2xl font-bold row-span-1 self-center'>{site.title}</h3>
                                <p className='text-sm row-span-1'>{site.description}</p>
                                <button className='font-semibold text-blue-500 row-span-1 place-self-start'>More Info</button>
                                <div className="languages pt-2 px-1 row-span-1 col-span-2 self-center">
                                    <ul className='flex justify-between items-start '>
                                        {site.skills.map(skill =>
                                            <li className='p-1 bg-gray-400 rounded-lg'><Icon name={skill} class='text-xl inline-block' /><p className='inline-block pl-1 text-sm'>{skill}</p></li>
                                        )}
                                    </ul>
                                </div>
                        {/* <div className="site-info flex flex-col mx-3 justify-evenly w-2/3 h-full">
                            <div className="project-header flex flex-wrap items-center justify-between">

                            </div>

                        </div> */}
                    </div>

                )}
            </div>
        </main> 
    )
}
{/* <div className="info-bg transition-all duration-200 ease-out absolute -top-6 hover:-top-20 w-full h-[200%] overflow-hidden -skew-y-8 bg-gradient-to-b from-blue-400 to bg-cyan-300"></div> */}
// relative my-10 flex items-center z-10 min-h-36 max-h-48 max-w-lg m-auto bg-slate-300 dark:bg-zinc-900 p-2 rounded-xl
export default Projects
