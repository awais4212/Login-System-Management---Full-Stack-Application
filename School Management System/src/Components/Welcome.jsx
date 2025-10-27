import React from 'react'
import { useNavigate } from 'react-router-dom'

const Welcome = ({ user, setUser }) => {
  const navigate = useNavigate()

  const handleLogout = () => {
    setUser(null)
    navigate('/home')
  }

  return (
    <div className='welcome-container'>
      <h1>Welcome Back! 🎊</h1>
      {user && (
        <>
          <p style={{ fontSize: '1.5rem', fontWeight: '600', color: '#667eea' }}>
            Hello, {user.username}!
          </p>
          <p style={{ fontSize: '1.1rem', color: '#888', marginBottom: '1rem' }}>
            {user.email}
          </p>
        </>
      )}
      <p>
        You're now part of our amazing community. Start exploring and connecting with others!
      </p>
      <button 
        onClick={handleLogout} 
        className='btn'
        style={{ marginTop: '2rem' }}
      >
        Logout
      </button>
    </div>
  )
}

export default Welcome