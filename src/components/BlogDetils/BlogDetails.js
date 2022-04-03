import React, { useEffect, useState } from 'react';
import './BlogDetails.css'
import { useParams } from 'react-router-dom';

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
            <img className='image shadow-sm ms-5' src={imageURL} alt="" />
            <div className='lekha'>
                <h2>{title}</h2>
                <p>{blog}</p>
            </div>
        </div>
    );
};

export default BlogDetails;