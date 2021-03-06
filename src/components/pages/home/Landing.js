import Typist from 'react-typist'
import TypistStyle from 'react-typist/dist/Typist.css'
import {BsChevronCompactDown} from 'react-icons/bs'
import { HashLink } from 'react-router-hash-link'
import { motion } from 'framer-motion'


function Landing() {
        function resize() {
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        }
        window.addEventListener('resize', resize);
        window.addEventListener('load', resize);
        window.addEventListener('orientationchange', resize);

        // window.addEventListener('orientationchange', () => {
        //     let vh = window.innerHeight * 0.01;
        //     document.documentElement.style.setProperty('--vh', `${vh}px`);
        // });

    return (
        <section className='landing flex flex-col px-5 m-auto justify-between max-w-3xl md:mb-14'>
            <div className="landing-info relative align-center top-[35%] max-w-[585px] md:pb-5">
                <div className="name-container absolute text-3xl leading-[3.25rem] sm:text-5xl sm:leading-[5rem] font-semibold">
                    <motion.h1
                    initial={{y: "100%", opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{ease: "easeOut", duration: 1}}
                    className='name text-blue-500 max-w-[450px] sm:max-w-[550px]'
                    >
                        Riley Robertson
                    </motion.h1>
                    <span className='block bg-slate-200 dark:bg-darkbg relative w-full h-28 sm:h-44 mt-3' aria-hidden='true'></span>
                </div>
                <div className="info-container mt-28 sm:mt-44 pt-2">
                    <motion.p
                    initial={{y: "100%", opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{ease: "easeOut", duration: 1}}
                    className='text-lg xs:text-xl max-w-[85%] sm:max-w-none'
                    >
                        Passionate creator, with a love for building captivating and responsive user interfaces on the web.
                    </motion.p>
                    <span className='block bg-slate-200 dark:bg-darkbg absolute w-full h-10' aria-hidden='true'></span>
                </div>
                <div className="title-container relative pt-2 text-xl">
                    <motion.p
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{ease: "easeOut", duration: 1, delay: 1.2}}
                    className='title-text flex z-10 mt-2 items-center sm:text-3xl align-middle'
                    >   
                        <span className='h-[1.9rem]'>Front End</span>
                        <span id='typist-title' className='pl-1.5 h-8'>
                        <Typist className='text-xl sm:text-3xl'>
                            <Typist.Delay ms={2500} />
                            <span className='title-dev text-xl sm:text-3xl'>&lt;Developer /&gt;</span>
                            <Typist.Backspace count={14} delay={4000}/>
                            <Typist.Delay ms={500}/>
                            <span className='title-design text-2xl sm:text-[2.25rem]'>Designer</span>
                            <Typist.Backspace count={8} delay={6000}/>
                            <span className='title-dev hover:bg-black hover:text-green-400 cursor-default'>&lt;Developer /&gt;</span>
                            
                        </Typist>
                        </span>
                    </motion.p>
                </div>
            </div>
            <div className="next-arrow self-center justify-self-end px-10 py-7 text-3xl ">
                <HashLink className='arrow-link text-4xl md:text-5xl' smooth to='#projects'><BsChevronCompactDown /></HashLink>
            </div>
        </section>
    )
}

export default Landing