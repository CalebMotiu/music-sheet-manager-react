import { useState } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Sheets = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/sheets');
    const [search, setSearch] = useState('');

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const filteredBlogs = blogs
        ? blogs.filter((blog) => {
            return (
                blog.title.toLowerCase().includes(search.toLowerCase()) ||
                blog.author.toLowerCase().includes(search.toLowerCase()) ||
                blog.body.toLowerCase().includes(search.toLowerCase())
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
            {error && <div>{error}</div>}
            {isPending && <div>Loading ....</div>}
            {filteredBlogs && <BlogList blogs={filteredBlogs} title="All Sheets!" />}
        </div>
    );
};

export default Sheets;
