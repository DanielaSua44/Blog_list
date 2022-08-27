
import '../css/style.css'

const Blog = ({blog,handleRemove,handleLike,handleView}) => {

 
 return (
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{blog.title}</h5>
            <button onClick={handleView} className="btn-primary">view</button>
            <button onClick={handleRemove} className="btn-danger">remove</button>
            <button onClick={handleLike} className="btn-success">like</button>
          </div>
        </div>
      </div>
    </div>

  </div>  
 )
 }

export default Blog