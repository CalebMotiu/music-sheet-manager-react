import {  useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";


const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('http://localhost:8000/sheets/' + id);
  const navigate = useNavigate();


  const handleClick = () => {
    fetch('http://localhost:8000/sheets/' + blog.id, {
      method: 'DELETE'
    });
    navigate("/sheets")
    
  }

  return (
    <div className="sheet-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <h4>Written by { blog.author }</h4>
          <div style={{ whiteSpace: 'pre-line' }}>{blog.body}</div>
          <button onClick={ handleClick }>delete</button>
        </article>
      )}
    </div>
  );
}
 
export default BlogDetails;