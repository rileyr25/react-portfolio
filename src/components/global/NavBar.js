import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <header>
            <div className="navbar">
                <Link to='/'><h1>RR</h1></Link>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/projects'>Projects</Link></li>
                        <li><Link to='/lab'>Lab</Link></li>
                        <li><Link to='/about'>About</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default NavBar
