import { NavLink } from 'react-router-dom';
import Logo from '../assets/BinogaWite.png'

import React from 'react'

export const Navbar = () => {

  const navBtnHandler= () =>{
    
  }

  return (
    <div>
      <nav className='bg-transparent px-2 sm:px-4 dark:bg-transparent-900'>
        <div className='fixed container flex flex-wrap items-center justify-between mx-auto px-5'>
          <img src={Logo} className="h-6 mr-3 sm:h-9" alt='logo' />
          <button 
            data-collapse-toggle="navbar-default" 
            type="button" 
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
            aria-controls="navbar-default" 
            aria-expanded="false"
            onClick={navBtnHandler}>
            <svg 
              className='w-6 h-6' 
              aria-hidden="true" 
              fill="currentColor" 
              viewBox="0 0 20 20" 
              xmlns="http://www.w3.org/2000/svg">
                <path 
                  fillRule="evenodd" 
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd">
                </path>
            </svg>
          </button>
          <div 
            className="hidden w-full md:block md:w-auto" 
            id="navbar-default">
            <ul 
              className="flex flex-col p-4 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-transparent-800 md:dark:bg-transparent-900 dark:border-transparent-700">
              <li 
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white" 
                aria-current="page">
                <NavLink to='/'>Home</NavLink>
              </li>
              <li className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white">
                <NavLink to='/Welcome' >Welcome</NavLink>
              </li>
              <li className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white">
                <NavLink to='/Policies'>Policies</NavLink>
              </li>
              <li className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white">
                <NavLink to='/About'>About</NavLink>
              </li>
              <li className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white">
                <NavLink to='/Contact'>Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    
  )
}
