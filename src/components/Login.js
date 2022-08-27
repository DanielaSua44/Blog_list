import React,{useState} from 'react'
import '../css/style.css'
import loginService from '../services/login'
import blogService from '../services/blogs'

 const Login = ({setUser,notify}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (event) => {
        event.preventDefault()
        loginService.login({
            username, password
        }).then(user => {
            window.localStorage.setItem('loggedBloglistUser', JSON.stringify(user))
            blogService.setToken(user.token)
            setUser(user)
            setUsername('')
            setPassword('')
        }).catch(error => {
            notify(`wrong username or password`, 'error')
        } )

    }

    const handleUsernameChange = (event) => {
        setUsername(event.target.value)
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

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

