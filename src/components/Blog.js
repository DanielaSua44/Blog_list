
import '../css/style.css'

const Blog = ({blog}) => (
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{blog.title}</h5>
            <p className="card-text">{blog.author}</p>
            <a href={blog.url} className="btn btn-primary">Read</a>
          </div>
        </div>
      </div>
    </div>
  </div>  
)

export default Blog