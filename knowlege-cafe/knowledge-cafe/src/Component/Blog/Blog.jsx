import './Blog.css'
import { CiBookmark } from "react-icons/ci";
import PropTypes from "prop-types";

const Blog = ({ blog, handleBookmarks, handleReadingTime }) => {
    const { author, author_img, cover, posted_date, reading_time, title, hashtags } = blog;
    return (
        <div className="border p-5 rounded-lg border-black mb-4">
            <img className='w-[80%] rounded-lg' src={cover} alt="" />
            <div className='flex justify-between items-center my-4'>
                <div className='flex items-center'>
                    <div className='pe-5'>
                        <img className='rounded-full w-[100px] h-[100px]' src={author_img} alt="" />
                    </div>
                    <div>
                        <p className='font-semibold text-2xl'>{author}</p>
                        <p className='font-semibold text-gray-500'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <span className='font-semibold text-gray-500 text-[20px]'>{reading_time} Min read</span>
                    <button
                        onClick={() => handleBookmarks(title)} 
                        className='text-3xl ps-3'
                    ><CiBookmark></CiBookmark></button>
                </div>
            </div>
            <h1 className="text-4xl font-semibold my-3">{title}</h1>
            <div className='py-4'>
                {
                    hashtags.map(hash => <span key={blog.id} className='pe-3 font-semibold text-gray-500'>{hash}</span>)
                }
            </div>
            <button className='text-blue-700 underline font-semibold' onClick={()=>handleReadingTime(reading_time)}>Mark as Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmarks: PropTypes.func.isRequired,
    handleReadingTime: PropTypes.func.isRequired
}



export default Blog;