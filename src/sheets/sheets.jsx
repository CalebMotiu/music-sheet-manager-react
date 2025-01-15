import { useState } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Sheets = () => {
  const { data: blogs, isPending, error } = useFetch('http://localhost:8000/sheets');
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredBlogs = blogs
    ? blogs.filter((blog) => {
        return (
          (blog.title.toLowerCase().includes(search.toLowerCase()) ||
            blog.author.toLowerCase().includes(search.toLowerCase()) ||
            blog.body.toLowerCase().includes(search.toLowerCase())) &&
          (selectedCategory ? blog.category === selectedCategory : true) // Filter by category
        );
      })
    : [];

  return (
    <div className="sheets">
      <input
        type="text"
        placeholder="Search by title, author, or lyrics..."
        value={search}
        onChange={handleSearchChange}
        className="search-input"
      />
      <select
        value={selectedCategory}
        onChange={handleCategoryChange}
        className="category-filter"
      >
        <option value="">All Categories</option>
        <option value="Worship">Worship</option>
        <option value="Praise">Praise</option>
        <option value="Glorifying the Name of Jesus">Glorifying the Name of Jesus</option>
        <option value="Thank">Thank</option>
        <option value="Repentance">Repentance</option>
        <option value="Carols">Carols</option>
        <option value="Resurrection">Resurrection</option>
      </select>
      {error && <div>{error}</div>}
      {isPending && <div>Loading ....</div>}
      {filteredBlogs && <BlogList blogs={filteredBlogs} title="All Sheets!" />}
    </div>
  );
};

export default Sheets;