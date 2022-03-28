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
                        {[
                            ['home', '/'],
                            ['projects', '/projects'],
                            ['lab', '/lab'],
                            ['about', '/about']
                        ].map(([title, url]) => (
                            <li>
                                <NavLink activeClassName='active' to={url}>
                                    <Icon name={title}/> {title[0].toUpperCase()+title.slice(1)}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default NavBar
