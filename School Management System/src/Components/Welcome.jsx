import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { MdDelete } from "react-icons/md";

const Welcome = ({ user, setUser }) => {
  const navigate = useNavigate()
  const [tasks, setTasks] = useState([])
  const [formData, setFormData] = useState({ title: '', description: '' })

  const handleLogout = () => {
    setUser(null)
    navigate('/home')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.title && formData.description) {
      setTasks([...tasks, formData])
      setFormData({ title: '', description: '' })
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleDelete = (indexToDelete) => {
    setTasks(tasks.filter((_, index) => index !== indexToDelete))
  }

  return (
    <div className='welcome-container'>
      <h1>Welcome Back! 🎊</h1>
      {user && (
        <>
          <p>Create a Task</p>
        </>
      )}
      <p>
        The Task Manager App is a simple and efficient web application designed to help users organize, track, and manage their daily tasks. It allows users to add, edit, delete, and mark tasks as completed, providing a clear overview of pending and finished work. Built with modern web technologies, it focuses on productivity and an easy-to-use interface. The app helps users stay organized, set priorities, and improve time management, making it ideal for students, professionals, and anyone who wants to boost their efficiency.
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input 
          type="text" 
          name='title' 
          value={formData.title}
          onChange={handleChange}
          placeholder='Task...' 
          required
        />

        <label htmlFor="description">Description</label>
        <input 
          type="text" 
          name='description' 
          value={formData.description}
          onChange={handleChange}
          placeholder='Description of your task' 
          required
        />

        <input type="submit" value="Submit" />
      </form>

      <div className='tasks-list'>
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <div key={index} className='task-item'>
              <div>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
              </div>
              <button onClick={() => handleDelete(index)} className='delete-btn'>
                Delete <MdDelete />
              </button>
            </div>
          ))
        ) : (
          <p>No tasks yet. Create your first task above!</p>
        )}
      </div>

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