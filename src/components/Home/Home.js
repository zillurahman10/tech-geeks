import React, { useEffect, useState } from 'react';
import Blogs from '../Blogs/Blogs';

const Home = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('https://retro-tech-talks.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div>
            {
                blogs.map(blog => <Blogs key={blog._id} blog={blog}></Blogs>)
            }
        </div>
    );
};

export default Home;