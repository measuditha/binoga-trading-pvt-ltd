import { NavLink } from 'react-router-dom';
import Logo from '../assets/BinogaBlk.png'

import React from 'react'

export const Navbar = () => {
  return (
    <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/Welcome' >Welcome</NavLink>
        <NavLink to='/Policies'>Policies</NavLink>
        <NavLink to='/About'>About</NavLink>
        <NavLink to='/Contact'>Contact</NavLink>
    </div>
  )
}
