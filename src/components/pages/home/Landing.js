import Typist from 'react-typist'
import {BsChevronCompactDown} from 'react-icons/bs'
import { HashLink } from 'react-router-hash-link'
import { motion } from 'framer-motion'


function Landing() {
    //veiwport height event listener
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        window.addEventListener('resize', () => {
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        });

        window.addEventListener('orientationchange', () => {
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        });

    return (
        <section className='landing flex flex-col px-5 m-auto justify-between'>
            <div className="landing-info relative">
                <div className="name-container absolute">
                    <motion.h1
                    initial={{y: "100%", opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{ease: "easeOut", duration: 1}}
                    >
                        Riley Robertson
                    </motion.h1>
                    <span className='block bg-slate-200 dark:bg-darkbg relative w-full h-10 mt-3' aria-hidden='true'></span>
                </div>
                <div className="info-container mt-10 ">
                    <motion.p
                    initial={{y: "100%", opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{ease: "easeOut", duration: 1}}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste velit amet minus sint, nemo necessitatibus?
                    </motion.p>
                    <span className='block bg-slate-200 dark:bg-darkbg absolute w-full h-10' aria-hidden='true'></span>
                </div>
                <div className="title-container relative">
                    <motion.p
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{ease: "easeOut", duration: 1, delay: 1.2}}
                    className='flex z-20'
                    >Front End
                        <span id='title' className='pl-1.5'>
                        <Typist

                        >
                            <Typist.Delay ms={2500} />
                            &lt;<span>Developer </span>/&gt;
                            <Typist.Backspace count={14} delay={4000}/>
                            <Typist.Delay ms={500}/>
                            <span>Designer</span>
                            <Typist.Backspace count={8} delay={6000}/>
                            &lt;<span>Developer </span>/&gt;
                            
                        </Typist>
                        </span>
                    </motion.p>
                </div>
            </div>
            <div className="next-arrow self-center justify-self-end px-10 py-5 text-3xl ">
                <HashLink className='arrow-link' smooth to='#projects'><BsChevronCompactDown /></HashLink>
            </div>
        </section>
    )
}

export default Landing