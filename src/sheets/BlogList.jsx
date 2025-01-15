import { Link } from "react-router-dom";

const BlogList = ({ blogs, title  }) => {
    // const blogs = props.blogs;
    // const title = props.title;

    return ( 
        <div className="blog-list"> 
            <h2>{title}</h2>
        {blogs.map((blog) => (
            <div className="sheets-preview" key={blog.id}>
                <Link to={`/sheets/${blog.id}`}>
                <h2>{ blog.title }</h2>
                <p>Written by { blog.author }</p>
                </Link>
            </div>
        ))}
        </div>
     );
}
 
export default BlogList;