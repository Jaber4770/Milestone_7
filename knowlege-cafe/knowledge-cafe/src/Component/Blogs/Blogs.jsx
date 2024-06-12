import { useState } from "react";
import "./Blogs.css"
import { useEffect } from "react";

const Blogs = () => {

    const [blog, setBlog] =useState([]);

    useEffect(()=>{
        fetch('../../../public/postData.json')
            .then(res => res.json())
            .then(data => setBlog(data))
    },[])


    return (
        <div>
            {
                console.log(blog)
            }
        </div>
    );
};

export default Blogs;