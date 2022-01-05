import React from 'react'
import Typist from 'react-typist'
import {BsChevronCompactDown} from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Landing() {
    return (
        <div className='landing-page'>
            <div className="top-slant"></div>
            <div className="landing-main">
                <h1>Riley Robertson</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste velit amet minus sint, nemo necessitatibus?</p>
                <p>Front End
                    <span id='title'>
                    <Typist
                
                    >
                        <Typist.Delay ms={2000} />
                        &lt;<span>Developer </span>/&gt;
                        <Typist.Backspace count={14} delay={5000}/>
                        <Typist.Delay ms={500}/>
                        <span>Designer</span>
                        <Typist.Backspace count={8} delay={6000}/>
                        &lt;<span>Developer </span>/&gt;
                    </Typist>
                    </span>
                </p>
            </div>
            <div className="homescroll-nav" role="navigation" aria-label="Parallax Nav">
                <Link to='#home' className="circle">0</Link>
                <Link to='#home' className="circle">1</Link>
                <Link to='#home' className="circle">2</Link>
                <Link to='#home' className="circle">3</Link>
            </div>
            <div className="next-arrow">
                <BsChevronCompactDown />
            </div>
        </div>
    )
}

export default Landing
