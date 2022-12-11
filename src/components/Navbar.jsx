import { NavLink } from 'react-router-dom';
import Logo from '../assets/BinogaWite.png'

export const Navbar = () => {

  return (
    <div>
      <nav className='bg-transparent px-2 sm:px-4 dark:bg-transparent-900'>
        <div className='fixed container flex flex-wrap items-center justify-between mx-auto px-5'>
          <img src={Logo} className="h-6 mr-3 sm:h-9" alt='logo' />
          <div 
            className="w-full md:block md:w-auto">
            <ul 
              className="flex flex-col p-4 mt-4 border items-center rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-transparent-800 dark:border-transparent-700">
              <li className="block py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0 dark:text-white">
                <NavLink to='/'>Home</NavLink>
              </li>
              <li className="block py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0 dark:text-white">
                <NavLink to='/Welcome' >Welcome</NavLink>
              </li>
              <li className="block py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0 dark:text-white">
                <NavLink to='/Policies'>Policies</NavLink>
              </li>
              <li className="block py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0 dark:text-white">
                <NavLink to='/About'>About</NavLink>
              </li>
              <li className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 dark:text-white">
                <NavLink to='/Contact'>Contact</NavLink>
              </li>
            </ul>
            <button>

            </button>
          </div>
        </div>
      </nav>
    </div>
    
  )
}
