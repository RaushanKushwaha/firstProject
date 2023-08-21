import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='header'>
      <Link to={'/home'} className='component'>Home</Link>
      <Link to={'/about'} className='component'>About</Link>
      <Link to={'/contact'} className='component'>Contact</Link>
    </div>
  )
}

export default Header