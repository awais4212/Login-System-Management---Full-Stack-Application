import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='container'>
      <h1 style={{ 
        fontSize: '3rem', 
        marginBottom: '1.5rem',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }}>
        Welcome to Our Community! 🎉
      </h1>
      <p style={{ 
        fontSize: '1.3rem', 
        color: '#666', 
        marginBottom: '2rem',
        lineHeight: '1.6'
      }}>
        New here? Sign up to see the content and interact with our amazing community!
      </p>
      <div style={{ 
        display: 'flex', 
        gap: '1rem', 
        justifyContent: 'center',
        marginTop: '2rem'
      }}>
        <Link to="/signup">
          <button className='btn' style={{ padding: '1rem 2rem' }}>
            Get Started
          </button>
        </Link>
        <Link to="/login">
          <button className='btn' style={{ 
            padding: '1rem 2rem',
            background: 'transparent',
            border: '2px solid #667eea',
            color: '#667eea',
            boxShadow: 'none'
          }}>
            Login
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Home