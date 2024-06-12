import { useState } from "react";
import "./Blogs.css"
import { useEffect } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {

    const [blogs, setBlogs] =useState([]);

    useEffect(()=>{
        fetch('../../../public/postData.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    },[])


    return (
        <div className="w-2/3">
            <h1 className="text-5xl">Blogs: {blogs.length}</h1>
            {
                blogs.map(blog => <Blog 
                    key={blog.id} 
                    blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;