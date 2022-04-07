import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Toggle from './Toggle'
import Icon from './Icon'
import useDarkMode from '../../hooks/useDarkMode';

function NavBar() {
    const [darkMode, setDarkMode] = useDarkMode();

    return (
        <header className='text-black bg-black dark:text-white dark:bg-blue-700'>
            <div className="navbar">
                <div className="mobile-header flex justify-between items-center p-2 h-14">
                <Link to='/' className="logo text-white"><h1>RR</h1></Link>
                <Toggle darkMode={darkMode} setDarkMode={setDarkMode}/>
                </div>
                <nav aria-label="Main" className='fixed bottom-0 border-t border-gray-700 w-full bg-white dark:bg-darkbg h-20 z-50'>
                    <ul className='flex justify-between'>
                        {[
                            ['home', '/'],
                            ['projects', '/projects'],
                            ['lab', '/lab'],
                            ['about', '/about']
                        ].map(([title, url]) => (
                            <li className='py-4 w-1/4 text-center'>
                                <NavLink activeClassName='active' className='' to={url}>
                                    <Icon name={title} /> 
                                    <span className=''>{title[0].toUpperCase()+title.slice(1)}</span>
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
