import React from 'react'
import Typist from 'react-typist'

function Home() {
    return (
        <div>
            <h1>Riley Robertson</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste velit amet minus sint, nemo necessitatibus?</p>
            <p>Front End 
                <span>
                &lt; 
                <Typist>
                    <span>Developer</span>
                    <Typist.Backspace count={9} delay={4000}/>
                    <span>Designer</span>
                </Typist>
                /&gt;
                </span>
            </p>
        </div>
    )
}

export default Home
