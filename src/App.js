import { useState, useEffect,useRef } from 'react'
import blogService from './services/blogs'
import Login from './components/Login'
import FormBlog from './components/FormBlog'
import Notification from './components/Notification'
import { Togglable } from './components/Togglable'
import Blog from './components/Blog'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [notification, setNotification] = useState(null)
  const [user, setUser] = useState(null)
  
  const blogFormRef = useRef()
  const loginFormRef = useRef()

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBloglistUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  } , [])

  
 

  const handleLogout = async (event) => {
    event.preventDefault()
    setUser(null)
    window.localStorage.removeItem('loggedUser')
  }



  const notify = (message, type) => {
    setNotification({ message, type })
    setTimeout(() => {
      setNotification(null)
    }, 5000)
  }
  const addBlog =  (newObject) => {
    try {
      blogService.create(newObject)
      .then(returnedBlog => {
        setBlogs(blogs.concat(returnedBlog))
        notify(`a new blog ${returnedBlog.title} by ${returnedBlog.author} added`)
      } )
    } catch (exception) {
      notify(`something went wrong`)
    }
  }
  const removeBlog = (id) => {
    const blogToRemove = blogs.find(blog => blog.id === id)
    if (window.confirm(`remove blog ${blogToRemove.title} by ${blogToRemove.author}`)) {
      blogService.remove(id)
      .then(returnedBlog => {
        setBlogs(blogs.filter(blog => blog.id !== id))
        notify(`blog ${returnedBlog.title} by ${returnedBlog.author} removed`)
      } )
    }
  }

  const likeBlog = (id) => {
    const blogToLike = blogs.find(blog => blog.id === id)
    const likedBlog = {
      ...blogToLike,
      likes: blogToLike.likes + 1
    }
    blogService.update(id, likedBlog)
    .then(returnedBlog => {
      setBlogs(blogs.map(blog => blog.id !== id ? blog : returnedBlog))
      notify(`blog ${returnedBlog.title} by ${returnedBlog.author} liked`)
    } )
  }

  const handleClick = (blog,e) => {
    e.preventDefault()
    setBlogs(blogs.filter(c=>c.title===blog.title))
  }

  
  return (
    <div>
      <h1>Blogs</h1>
      <Notification notification={notification} />
      {user === null ?
        <Togglable buttonLabel="login" ref={loginFormRef}>
          <Login setUser={setUser} notify={notify} />
        </Togglable> :
        <div>
          <p>{user.name} logged in <button onClick={handleLogout}>logout</button></p>
          <Togglable buttonLabel="new blog" ref={blogFormRef}>
            <FormBlog createBlog={addBlog} />
          </Togglable>
          {
          blogs.sort((a,b) => b.likes - a.likes)
          .map(blog =>
            <div key={blog.id}>
              <Blog blog={blog.id} handleView={(e) =>handleClick(blog,e)} likeBlog={() =>(likeBlog)} removeBlog={() => removeBlog()}/>
            </div>
          )
          }
        </div>
      }
    </div>
  )
}

export default App
