import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './Blogs.css'

const Blogs = (props) => {

    // const x = useParams()
    // console.log(x);

    const navigate = useNavigate()

    const { _id, title, blog, admin, imageURL } = props.blog
    return (
        <div className='d-flex blog'>
            <div>
                <img className='image shadow-sm' src={imageURL} alt="" />
            </div>
            <div className='text'>
                <h2 className='text-title'>{title}</h2>
                <p>Posted by {admin}</p>
                <p>{blog.slice(0, 300)}<span role="button" className='link' onClick={() => navigate(`/blog/${_id}`)}>...Read more</span></p>

            </div>
        </div>
    );
};

export default Blogs;