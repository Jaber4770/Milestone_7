import './Blog.css'
import PropTypes from "prop-types";

const Blog = ({blog}) => {
    const {author, author_img, cover, posted_date, reading_time, title} = blog;
    return (
        <div className='w-1/3'>
            <img src={cover} alt="" />
            <h1 className="text-3xl">{title}</h1>
            <p>{author}</p>
            <img className='rounded-full w-[100px] h-[100px]' src={author_img} alt="" />
            <p>{posted_date}</p>
            <p>{reading_time}</p>
        </div>
    );
};

Blog.propTypes ={
    blog: PropTypes.object.isRequired,
}



export default Blog;