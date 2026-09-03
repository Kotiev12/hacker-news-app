import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='wrapper'>
     <div className='header'>
      <Link to={'/'}>
      <div className='header-logo'>
        <h1>Hacker-News</h1>
      </div>
      </Link>
      <div className='header-info'>
        <button className='btn-login'>Login</button>
      </div>
     </div>
    </div>
  )
}

export default Header