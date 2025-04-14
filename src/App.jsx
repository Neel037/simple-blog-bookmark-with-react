import { useState } from 'react'
import './App.css'
import Navbar from './assets/components/Navbar/Navbar'
import Blogs from './assets/components/Blogs/Blogs'

function App() {
  const [bookmarked, setBookmarked] = useState([]);
  const [readingTime, setReadingTime] = useState(0);


  const handleBookmark = (blog) => {
    setBookmarked([...bookmarked, blog]);
  }

  const handleMarkAsRead = (time, id) => {
    setReadingTime(readingTime + time);

    handleRemoveBookmark(id);

  }

  const handleRemoveBookmark = (id) => {
    const remaining = bookmarked.filter(mark => mark.id !== id);
    setBookmarked(remaining);
  }


  return (
    <>
      <Navbar />
      

      <div className="main-container flex text-center">
        <div className="left-container w-[70%] bg-gray-100">

        <Blogs handleBookmark={handleBookmark} handleMarkAsRead={handleMarkAsRead}/>
          

        </div>
        <div className="right-container w-[30%]">
          <h2>Reading Time: {readingTime}</h2>
          <h2>Bookmark Count: {bookmarked.length}</h2>

          {
            bookmarked.map((marked) => <p className='bg-orange-400 p-2 m-2 shadow-2xl'>{marked.title}</p>)
          }

        </div>
      </div>


    </>
  )
}

export default App
