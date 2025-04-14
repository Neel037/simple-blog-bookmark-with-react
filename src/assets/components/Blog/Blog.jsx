import React from 'react';
import { FaBookmark } from "react-icons/fa";

const Blog = ({blog, handleBookmark, handleMarkAsRead}) => {

    return (
        <div>

            <div className="card bg-base-100 shadow-sm">
                <figure>
                    <img
                        src={blog.coverImage}
                        alt={blog.title} />
                </figure>
                <div className="author flex justify-between items-center gap-2 p-4">
                    <img
                        src={blog.author_img} className='w-12 rounded-full'
                        alt={blog.author} />
                    <p>{blog.author}</p>
                </div>
                <div className="card-body">
                    <h2 className="card-title">{blog.title}</h2>
                    <p>{blog.content}</p>
                </div>
                <div className="blog-tags flex justify-between items-center gap-2 p-4">
                    <div className="tags flex gap-2">
                        {
                            blog.tags.map(tag => <span key={tag} className='bg-gray-200 p-1 rounded'>{tag}</span>)
                        }
                    </div>
                    <p>{blog.readingTime} min read</p>
                    <button onClick={()=>handleBookmark(blog)}><FaBookmark /></button>

                </div>
                <div className="justify-center mb-3">
                <button onClick={()=>handleMarkAsRead(blog.readingTime, blog.id)} className="btn btn-wide">Mark as Read</button>
                </div>
            </div>
            
        </div>
    );
};

export default Blog;