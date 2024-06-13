import { useState } from 'react'
import './App.css'
import Blogs from './Component/Blogs/Blogs'
import Bookmark from './Component/Bookmark/Bookmark'
import Header from './Component/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleBookmarks = blog => {
    const newBookmark = [...bookmarks, blog];
    setBookmarks(newBookmark);
  }

  const handleReadingTime = (id, time) => {
    let newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    // remove the read blog from bookmark
    // console.log("remove bookmark:", id);
    const remainingBookmarks = bookmarks.filter(bookmark => {bookmark.id !== id});
    setBookmarks(remainingBookmarks);
  }



  return (
    <>
      <div className='container mx-auto'>
        <Header></Header>
        <div className='flex flex-col md:flex-row lg:flex-row justify-center'>
          <Blogs handleBookmarks={handleBookmarks} handleReadingTime={handleReadingTime}></Blogs>
          <Bookmark bookmarks={bookmarks} readingTime={readingTime}></Bookmark>
        </div>
      </div>
    </>
  )
}

export default App
