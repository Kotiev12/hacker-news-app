import React from 'react'

const Header = () => {
  return (
    <div className='wrapper'>
     <div className='header'>
      <div className='header-logo'>
        <h1>Hacker-News</h1>
      </div>
      <div className='header-info'>
        <button className='btn-login'>Login</button>
      </div>
     </div>
    </div>
  )
}

export default Header