import { useState, useEffect } from 'react';
import React from 'react'
import Typist from 'react-typist'



function Home() {
    const [count, setCount] = useState(1);

    useEffect(() => {
      // document.title = `You clicked ${count} times`;
    console.log("Count: " + count);
    setCount(1);
    }, [count]);

    return (
        <div>
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
    )
}

export default Home
