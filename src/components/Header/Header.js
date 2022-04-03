import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='d-flex justify-content-between mx-5'>
            <div>
                <img src="https://raw.githubusercontent.com/mir-hussain/tech-geeks/main/src/Assets/Image/logo.png" alt="" />
            </div>
            <div className='mt-2 nav'>
                <Link className='me-3 text-black' to="/home">Home</Link>
                <Link className='me-3 text-black' to="/videos">Videos</Link>
                <Link className='text-black' to="/login">Login</Link>
            </div>
        </div>
    );
};

export default Header;