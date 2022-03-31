import React from 'react'
import Typist from 'react-typist'
import {BsChevronCompactDown} from 'react-icons/bs'
import { HashLink } from 'react-router-hash-link'
import VerticalNav from './VerticalNav'
import { motion } from 'framer-motion'

function Landing() {

    // min-h-[calc(100vh-200px)]
    return (
        <div className='landing min-h-[calc(100vh)] flex flex-col justify-between px-5 m-auto'>
            {/* <div className="top-slant"></div> */}
            {/* <motion.div className="landing-main"
                initial={{y: "100%", opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{ease: "easeOut", duration: 1}}
            > */}
            <div className="landing-info">
                <div className="name-container">
                <motion.h1
                    initial={{y: "100%"}}
                    animate={{y: 0}}
                    transition={{ease: "easeOut", duration: 1}}
                >
                    Riley Robertson
                </motion.h1>
                <span className='block bg-pink-500 relative w-full h-10' aria-hidden='true'></span>
                </div>
                <div className="info-container">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste velit amet minus sint, nemo necessitatibus?</p>
                    <span className='block bg-pink-500 relative w-full h-8' aria-hidden='true'></span>
                </div>
                <div className="title-container"></div>
                <p>Front End
                    <span id='title'>
                    <Typist>
                        <Typist.Delay ms={2500} />
                        &lt;<span>Developer </span>/&gt;
                        <Typist.Backspace count={14} delay={5000}/>
                        <Typist.Delay ms={500}/>
                        <span>Designer</span>
                        <Typist.Backspace count={8} delay={6000}/>
                        &lt;<span>Developer </span>/&gt;
                    </Typist>
                    </span>
                </p>
                <span className='block bg-pink-500 relative w-full h-8' aria-hidden='true'></span>
            </div>
            {/* </motion.div> */}
            {/* <VerticalNav /> */}
            <div className="next-arrow self-center px-10 py-5 text-3xl">
                <HashLink className='arrow-link' smooth to='#projects'><BsChevronCompactDown /></HashLink>
            </div>
        </div>
    )
}

export default Landing

//bg-slate-200 dark:bg-darkbg