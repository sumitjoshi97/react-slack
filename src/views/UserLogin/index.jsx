import React, { useState, useContext } from 'react'

import { Store } from '../../store/Store'
import { onUsernameSubmit } from '../../store/Actions'
import './styles.css'

const UserLogin = () => {
  const { dispatch } = useContext(Store)
  const [name, setName] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    console.log(name)
    // check if input is not blank and submit name
    if (name.trim().length > 0) {
      onUsernameSubmit(name, dispatch)
    }
  }

  return (
    <div className="user-login">
      <form onSubmit={handleSubmit} className="login-form">
        <h1 className="header">Login</h1>
        <input
          type="text"
          placeholder="What is your name??"
          onChange={e => setName(e.target.value)}
          className="input"
        />
        <input type="submit" className="input button" />
      </form>
    </div>
  )
}

export default UserLogin
