import React from 'react';
import { Link } from 'react-router-dom';
import './Blogs.css'

const Blogs = (props) => {
    const { _id, title, blog, admin, imageURL } = props.blog
    return (
        <div className='d-flex blog'>
            <div>
                <img className='image' src={imageURL} alt="" />
            </div>
            <div className='text'>
                <h2 className='title'>{title}</h2>
                <p>Posted by {admin}</p>
                <p>{blog.slice(0, 450)}<Link className='link' to='/home'>...Read more</Link></p>

            </div>
        </div>
    );
};

export default Blogs;