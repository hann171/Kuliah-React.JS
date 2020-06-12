import React from 'react';
import './CSS/Blog.css';

const Blog = (props) => {
    return <div className="blog-wrap">
        <img src="https://placeimg.com/640/480/any" alt=""/>
        <p>{props.tanggal}</p>
        <p>Judul Blog</p>
        <p>Summary Blog</p>
    </div>
}

export default Blog;