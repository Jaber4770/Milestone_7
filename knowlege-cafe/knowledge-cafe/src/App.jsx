import './App.css'
import Blogs from './Component/Blogs/Blogs'
import Bookmark from './Component/Bookmark/Bookmark'
import Header from './Component/Header/Header'

function App() {

  return (
    <>
      <Header></Header>
      <div className='flex flex-col md:flex-row lg:flex-row'>
        <Blogs></Blogs>
        <Bookmark></Bookmark>
      </div>
    </>
  )
}

export default App
