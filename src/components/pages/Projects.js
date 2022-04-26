import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import ContactCta from '../global/ContactCta'
import { content } from '../../data/content'
import Icon from '../global/Icon'
import { motion } from 'framer-motion'
import { InformationCircleIcon } from '@heroicons/react/outline'
import { ExternalLinkIcon } from '@heroicons/react/outline'
import { MdOutlineSwipe } from 'react-icons/md'



function Projects() {
    const IMG_PATH = '/assets/images/'

    let siteData = content.projects.sites
    const [type, setType] = useState('dev')
    
    const toggleType = e => {
        setType(e.target.value)
    }

    return (
        <main className='min-h-screen relative pb-10'>
            <div className="project-heading relative text-center py-10">
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
            {type==='dev' 
            ?   <div className="slide flex text-md justify-center items-center text-gray-600 dark:text-gray-400">
                <MdOutlineSwipe className='w-5 mr-1' />
                <p>Swipe Device to Visit</p>
                </div>
            : <p></p>
            }

            <div className='site-display px-4'>
                {siteData.filter(site => site.type === type).map(site => 
                    <div className="site-card mx-auto my-6 bg-slate-300 dark:bg-zinc-900 p-2 py-3 rounded-xl max-w-lg grid grid-cols-[35%_1fr] auto-rows-min">
                        <div className='mr-4 row-span-3 self-center'>
                        {type === 'dev' 
                        ?   <motion.img 
                            className='site-card-img'
                            drag='x'
                            dragSnapToOrigin
                            onDragEnd={
                                (event, info) => {
                                    var open = window.open(site.liveLink, '_blank');
                                    if(info.offset.x > 160) {
                                        open()
                                    }
                                    if (open == null || typeof(open)=='undefined')
                                    alert("Please enable popups to use this feature.");
                                }
                            }
                            dragConstraints={{top: 0, bottom: 0, left: 0, right: 200}}
                            whileHover={{ cursor: "grab",}}
                            whileDrag={{ scale: 1.1, cursor: "grabbing" }}
                            whileTap={{scale: 0.9, cursor: "grabbing" }}
                            src={`${IMG_PATH}${site.images.img1}`}
                            alt=""
                            />
                        :   <motion.img 
                            className='site-card-img'
                            src={`${IMG_PATH}${site.images.img1}`}
                            alt=""
                            />
                        }
                        </div>
                        <div className="project-header flex justify-between">
                        <h3 className='site-title text-xl xs:text-2xl font-bold row-span-1 self-center'>{site.title}</h3>
                        {site.repo 
                        ? <a href={site.repo} target='_blank' className='flex items-center align-bottom font-semibold text-sm xs:text-lg text-blue-500 hover:text-blue-700 transition-colors'><Icon name="GitHub" class='inline-block text-[1.5rem] align-top'/></a>
                        : <span></span>
                        }
                        </div>
                        <p className='text-sm sm:text-base row-span-1 pb-1'>{site.description}</p>
                        <div className="flex justify-between items-center row-span-1">
                        <a href={site.liveLink} target='_blank' className='flex items-center font-semibold text-sm xs:text-lg text-blue-500 hover:text-blue-700 transition-colors'><ExternalLinkIcon className='inline-block w-5 align-top'/><p className='ml-1'>Visit Site</p></a>
                        {/* <Link to={`{/projects/${site.name}}`} state={site} className='flex items-center font-semibold text-sm xs:text-lg text-blue-500 hover:text-blue-700 transition-colors'><ExternalLinkIcon className='inline-block w-5 align-top'/><p className='ml-1'>Visit Site</p></Link> */}
                            <div className="languages row-span-1 col-span-2">
                                <ul className='flex justify-between items-start '>
                                    {site.skills.map(skill =>
                                        <li className='mx-1 xs:mx-2'><Icon name={skill} class='text-xl xs:text-2xl' /></li>
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
{/* <div className="info-bg transition-all duration-200 ease-out absolute -top-6 hover:-top-20 w-full h-[200%] overflow-hidden -skew-y-8 bg-gradient-to-b from-blue-400 to bg-cyan-300"></div> */}
// relative my-10 flex items-center z-10 min-h-36 max-h-48 max-w-lg m-auto bg-slate-300 dark:bg-zinc-900 p-2 rounded-xl
export default Projects
