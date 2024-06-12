import { useState } from "react";
import "./Blogs.css"
import { useEffect } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({ handleBookmarks, handleReadingTime }) => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('../../../public/postData.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])


    return (
        <div className="w-2/3 container">

            <div>
                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        blog={blog}
                        handleBookmarks={handleBookmarks}
                        handleReadingTime={handleReadingTime}
                    ></Blog>)
                }
            </div>
        </div>
    );
};

Blogs.propTypes ={
    handleBookmarks: PropTypes.func.isRequired,
    handleReadingTime: PropTypes.func.isRequired
}


export default Blogs;