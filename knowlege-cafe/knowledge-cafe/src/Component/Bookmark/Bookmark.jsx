import "./Bookmark.css"
import PropTypes from "prop-types";

const Bookmark = ({ bookmarks, readingTime }) => {
    
    return (
        <div className="w-1/3">
            <h1 className="ps-5 ms-3 text-3xl py-3 mb-3 bg-purple-200 border-2 text-purple-900 rounded-lg border-purple-500 font-semibold">Spent time on read : {readingTime} Min</h1>
            <ul className=" p-5 bg-gray-200 rounded-lg ms-3">
                <h4 className="font-semibold text-2xl mb-2 rounded-lg py-4 px-3">Bookmarked Blogs: {bookmarks.length}</h4>
                {
                    bookmarks.map((bookmark) => <li key={bookmark.id} className="font-semibold text-2xl bg-gray-50 m-2 rounded-lg py-4 px-3">{bookmark}</li>)
                }
            </ul>
        </div>
    );
};

Bookmark.propTypes ={
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
}

export default Bookmark;