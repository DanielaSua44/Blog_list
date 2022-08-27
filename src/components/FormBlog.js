import React,{useState} from 'react'

const FormBlog = ({createBlog}) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')
  const [likes, setLikes] = useState(0)

  const handleSubmit = (event) => {
    event.preventDefault()
    createBlog({
      title,
      author,
      url,
      likes
    })
    setTitle('')
    setAuthor('')
    setUrl('')
    setLikes(0)
  }

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value)
  }
  const handleUrlChange = (event) => {
    setUrl(event.target.value)
  }
  const handleLikesChange = (event) => {
    setLikes(event.target.value)
  }
  return (
    <div>
        <h2>create new Blog</h2>
        <form onSubmit={handleSubmit}>
            <div className="form">
                <label htmlFor="title">Title</label>
                <input type="text" className="form-control" id="title" name="title" value={title} onChange={handleTitleChange} />
                <label htmlFor="author">Author</label>
                <input type="text" className="form-control" id="author" name="author" value={author} onChange={handleAuthorChange} />
                <label htmlFor="url">Url</label>
                <input type="text" className="form-control" id="url" name="url" value={url} onChange={handleUrlChange} />
                <label htmlFor="likes">Likes</label>
                <input type="number" className="form-control" id="likes" name="likes" value={likes} onChange={handleLikesChange} />
                <button type="submit" className="btn">Create</button>
            </div>
        </form>

    </div>
  )
}

export default FormBlog
