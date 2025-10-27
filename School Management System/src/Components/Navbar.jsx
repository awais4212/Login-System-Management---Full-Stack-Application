import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className='logo'>
          Linkify
        </div>
        <ul>
            <Link to="/home"><li>Home</li></Link>
            <Link to="/login"><li>Login</li></Link>
            <Link to="/signup"><li>Sign Up</li></Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar