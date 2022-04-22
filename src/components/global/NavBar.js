import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Toggle from './Toggle'
import Icon from './Icon'
import useDarkMode from '../../hooks/useDarkMode';

function NavBar() {
    const [darkMode, setDarkMode] = useDarkMode();

    return (
        <header className='text-black relative m-auto dark:text-white max-w-4xl'>
            <div className="navbar w-full md:flex md:justify-between md:items-center md:font-semibold md:text-lg md:w-full">
                <div className="mobile-header inline-block align-middle p-4">
                <Link to='/' className="logo md:font-normal text-black dark:text-white"><h1>RR</h1></Link>
                </div>
                <Toggle darkMode={darkMode} setDarkMode={setDarkMode}/>
                <nav aria-label="Main" className='fixed bottom-0 border-t md:relative md:border-0 md:w-2/3 md:h-auto md:bg-transparent  border-gray-700 w-full bg-white dark:bg-darkbg h-20 z-50'>
                    <ul className='flex justify-between m-auto md:max-w-sm'>
                        {[
                            ['home', '/'],
                            ['projects', '/projects'],
                            ['lab', '/lab'],
                            ['about', '/about']
                        ].map(([title, url]) => (
                            <li className='py-4 w-1/4 text-center'>
                                <NavLink activeClassName='active' className='' to={url}>
                                    <Icon name={title} class='nav-icon m-auto text-xl mb-1 md:hidden' /> 
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
