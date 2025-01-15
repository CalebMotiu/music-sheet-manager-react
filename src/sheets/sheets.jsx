import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Sheets = () =>{
    const { data: blogs, isPending, error} = useFetch('http://localhost:8000/sheets');


    return(
        <div className="sheets">
            {error && <div>{ error }</div>}
            {isPending && <div>Loading ....</div>}
            {blogs && <BlogList blogs={blogs} title="All Sheets!"/>}
        </div>
    );
}
export default Sheets;