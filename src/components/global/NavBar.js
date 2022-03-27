import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Icon from './Icon'
function NavBar() {
    return (
        <header className='text-white bg-black dark:bg-blue-700'>
            <div className="navbar">
                <Link to='/' className="logo"><h1>RR</h1></Link>
                <nav aria-label="Main">
                    <ul>
                        
                        <li>
                            <NavLink exact activeClassName='active' to='/'>
                            <Icon name="home"/>Home</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName='active' to='/projects'>
                            <Icon name="projects"/>Projects</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName='active' to='/lab'>
                            <Icon name="lab"/>Lab</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName='active' to='/about'>
                            <Icon name="about"/>About</NavLink>
                        </li>

                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default NavBar
