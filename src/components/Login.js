import React from 'react'
import '../css/style.css'

 const Login = ({username,password,handleUsernameChange,handlePasswordChange,handleLogin}) => {
  return (
    <div>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
            <div className="form">
                <label htmlFor="username">Username</label>
                <input type="text" className="form-control" id="username" value={username} onChange={handleUsernameChange} />
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" value={password} onChange={handlePasswordChange} />
                <button type="submit" className="btn">Login</button>
            </div>
        </form>
    </div>
  )
}

export default Login

