import React from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon'
function NavBar() {
    return (
        <header>
            <div className="navbar">
                <Link to='/'><h1>RR</h1></Link>
                <nav aria-label="Main">
                    <ul>
                        
                        <li>
                            <Link to='/'><Icon name="home"/>Home</Link>
                        </li>
                        <li>
                            <Link to='/projects'><Icon name="projects"/>Projects</Link>
                        </li>
                        <li>
                            <Link to='/lab'><Icon name="lab"/>Lab</Link>
                        </li>
                        <li>
                            <Link to='/about'><Icon name="about"/>About</Link>
                        </li>

                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default NavBar
