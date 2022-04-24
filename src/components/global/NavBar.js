import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Toggle from './Toggle'
import Icon from './Icon'
import useDarkMode from '../../hooks/useDarkMode';

function NavBar() {
    const [darkMode, setDarkMode] = useDarkMode();

    return (
        <header className='text-gray-600 relative m-auto dark:text-gray-200 max-w-4xl'>
            <div className="nav-wrapper w-full md:flex md:justify-between md:items-center md:font-semibold md:text-lg md:w-full">
                <div className="mobile-header inline-block align-middle p-4">
                <Link to='/' className="logo w-10"><img className='w-20' src="assets/images/logo1.png" alt="" /></Link>
                </div>
                <Toggle darkMode={darkMode} setDarkMode={setDarkMode}/>
                <nav aria-label="Main" className='navbar rounded-t-lg fixed bottom-0 md:relative md:w-2/4 md:h-auto  bg-slate-100/70 dark:bg-neutral-800/80 md:bg-transparent md:dark:bg-transparent backdrop-blur-lg md:backdrop-blur-none shadow-lg md:shadow-none w-full h-20 z-50'>
                    <ul className='flex justify-evenly m-auto md:mr-16 md:max-w-sm'>
                        {[
                            ['home', '/'],
                            ['projects', '/projects'],
                            // ['lab', '/lab'],
                            ['about', '/about']
                        ].map(([title, url]) => (
                            <li className='py-4 w-1/4 text-center'>
                                <NavLink activeClassName='active' className='nav-link' to={url}>
                                    <Icon name={title} class='nav-icon m-auto text-xl mb-1 md:hidden' /> 
                                    <span className='font-semibold'>{title[0].toUpperCase()+title.slice(1)}</span>
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
