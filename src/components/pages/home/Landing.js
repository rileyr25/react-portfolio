import React from 'react'
import Typist from 'react-typist'
import {BsChevronCompactDown} from 'react-icons/bs'
import { HashLink } from 'react-router-hash-link'
import VerticalNav from './VerticalNav'
import { motion } from 'framer-motion'

function Landing() {
    return (
        <div className='landing-page'>
            <div className="top-slant"></div>
            <motion.div className="landing-main"
                initial={{x: "-100%"}}
                animate={{x: 0}}
                transition={{ease: "easeInOut", duration: 1.5, type: "spring"}}
            >
                <h1>Riley Robertson</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste velit amet minus sint, nemo necessitatibus?</p>
                <p>Front End
                    <span id='title'>
                    <Typist
                
                    >
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
            </motion.div>
            <VerticalNav />
            <div className="next-arrow">
                <HashLink smooth to='#projects'><BsChevronCompactDown /></HashLink>
            </div>
        </div>
    )
}

export default Landing
