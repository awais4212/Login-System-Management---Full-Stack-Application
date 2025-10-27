import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm()

  const onSubmit = async (data) => {
    try {
      let signup = await fetch("http://localhost:3000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      
      let res = await signup.json()
      
      if (res.success) {
        alert("Signup successful! Please login.")
        navigate('/login')
      } else {
        alert(res.message || "Signup failed")
      }
    } catch (error) {
      console.error("Signup error:", error)
      alert("An error occurred during signup")
    }
  }

  return (
    <div className='signup'>
      <p>Create Account</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="username">Username</label>
          <input 
            type="text" 
            {...register("username", { 
              required: "Username is required", 
              minLength: { value: 4, message: "Minimum length 4 characters" }, 
              maxLength: { value: 20, message: "Maximum length 20 characters" } 
            })} 
          />
          {errors.username && <div className='message'>{errors.username.message}</div>}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            {...register("email", { 
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address"
              }
            })} 
          />
          {errors.email && <div className='message'>{errors.email.message}</div>}
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            {...register("password", { 
              required: "Password is required", 
              minLength: { value: 6, message: "Minimum length 6 characters" }, 
              maxLength: { value: 20, message: "Maximum length 20 characters" } 
            })} 
          />
          {errors.password && <div className='message'>{errors.password.message}</div>}
        </div>

        <input 
          disabled={isSubmitting} 
          type="submit" 
          value={isSubmitting ? "Signing up..." : "Sign Up"} 
          className='btn' 
        />
        
        <p style={{ marginTop: '1rem', color: '#666', fontSize: '0.9rem', textAlign: 'center' }}>
          Already have an account? <a href="/login" style={{ color: '#667eea', textDecoration: 'none', fontWeight: '600' }}>Login</a>
        </p>
      </form>
    </div>
  )
}

export default Signup