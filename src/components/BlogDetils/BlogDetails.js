import React, { useEffect, useState } from 'react';
import './BlogDetails.css'
import { Link, useParams } from 'react-router-dom';

const BlogDetails = () => {

    const { id } = useParams()

    const [singleBlog, setSingleBlog] = useState({})

    useEffect(() => {
        fetch(`https://retro-tech-talks.herokuapp.com/getBlog/${id}`)
            .then(res => res.json())
            .then(data => setSingleBlog(data))
    }, [id])

    const { title, blog, imageURL } = singleBlog

    return (
        <div className='d-flex justify-content-center flex-wrap'>
            <Link to="/" className='back'>Back</Link>
            <img className='image shadow-sm ms-5' src={imageURL} alt="" />
            <div className='lekha d-flex justify-content-center flex-wrap'>
                <h2>{title}</h2>
                <p className='blog'>{blog}</p>
            </div>
        </div>
    );
};

export default BlogDetails;