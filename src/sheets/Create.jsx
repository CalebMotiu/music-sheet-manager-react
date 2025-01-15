import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');  // Added category state
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !body || !author || !category) {
      alert('Please fill in all fields');
      return;
    }
    const blog = { title, body, author, category }; // Include category in the data
    setIsPending(true);

    fetch('http://localhost:8000/sheets', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log('New sheet added');
      setIsPending(false);
      navigate('/sheets');
    });
  };

  return (
    <div className="create">
      <h2>Add a New Sheet</h2>
      <form onSubmit={handleSubmit}>
        <label>Sheet Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Sheet Lyrics:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Sheet Author:</label>
        <textarea
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        ></textarea>
        <label>Category:</label>
        <select
          required
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select a category</option>
          <option value="Worship">Worship</option>
          <option value="Praise">Praise</option>
          <option value="Glorifying the Name of Jesus">Glorifying the Name of Jesus</option>
          <option value="Thank">Thank</option>
          <option value="Repentance">Repentance</option>
          <option value="Carols">Carols</option>
          <option value="Resurrection">Resurrection</option>
        </select>
        {!isPending && <button>Add Sheet</button>}
        {isPending && <button disabled>Adding Sheet...</button>}
      </form>
    </div>
  );
};

 
export default Create;