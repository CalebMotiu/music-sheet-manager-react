import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !body || !author) {
        alert('Please fill in all fields');
        return;
    }
    const blog = { title, body, author };
    setIsPending(true);

    fetch('http://localhost:8000/sheets', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(blog),
    }).then(() => {
        console.log('new blog added');
        setIsPending(false);
        navigate('/sheets');
    });
};

  return (
    <div className="create">
      <h2>Add a New Sheet</h2>
      <form onSubmit={handleSubmit}>
        <label>Sheet title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Sheet lyrics:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Sheet author:</label>
        <textarea
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        ></textarea>
        { !isPending && <button onClick={() => navigate("/sheets")}>Add Blog</button>}
        { isPending && <button disabled>Adding Blog....</button>}

      </form>
    </div>
  );
}
 
export default Create;