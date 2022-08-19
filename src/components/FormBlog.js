import React from 'react'

const FormBlog = ({newBlog,handleNewBlog,handleNewBlogChange}) => {
  return (
    <div>
        <h2>create new</h2>
        <form onSubmit={handleNewBlog}>
            <div className="form">
                <label htmlFor="title">Title</label>
                <input type="text" className="form-control" id="title" name="title" value={newBlog.title} onChange={handleNewBlogChange} />
                <label htmlFor="author">Author</label>
                <input type="text" className="form-control" id="author" name="author" value={newBlog.author} onChange={handleNewBlogChange} />
                <label htmlFor="url">Url</label>
                <input type="text" className="form-control" id="url" name="url" value={newBlog.url} onChange={handleNewBlogChange} />
                <label htmlFor="likes">Likes</label>
                <input type="number" className="form-control" id="likes" name="likes" value={newBlog.likes} onChange={handleNewBlogChange} />
                <button type="submit" className="btn">Create</button>
            </div>
        </form>

    </div>
  )
}

export default FormBlog
