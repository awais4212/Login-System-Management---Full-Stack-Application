import React from 'react'
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom'

const Login = ({ setUser }) => {

  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    try {
      let login = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: data.username,
          password: data.password
        })
      })
      
      let res = await login.json()
      
      if (res.success) {
        setUser(res.user)
        alert("Login successful!")
        navigate('/welcome')
      } else {
        alert(res.message)
      }
    } catch (error) {
      console.error("Login error:", error)
      alert("An error occurred during login")
    }
  }

  return (
    <div className='login'>
      <div>Login</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="username">Username or Email</label>
          <input 
            {...register("username", {required: "This field is required"})} 
            type="text" 
            className='input'
          />
          {errors.username && <div className='message'>{errors.username.message}</div>}
        </div>
        
        <div>
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            {...register("password", {required: "Password is required"})} 
          />
          {errors.password && <div className='message'>{errors.password.message}</div>}
        </div>

        <input type="submit" value="Login" className='btn' />
        
        <p style={{ marginTop: '1rem', color: '#666', fontSize: '0.9rem', textAlign: 'center' }}>
          Don't have an account? <a href="/signup" style={{ color: '#667eea', textDecoration: 'none', fontWeight: '600' }}>Sign Up</a>
        </p>
      </form>
    </div>
  )
}

export default Login