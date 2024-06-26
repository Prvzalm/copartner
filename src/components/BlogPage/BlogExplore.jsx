import React, { useState } from 'react';
import { blogs } from '../constants/data';
import { Link } from 'react-router-dom';

const BlogGrid = () => {
  const [displayedBlogs, setDisplayedBlogs] = useState(6);
  const [showMoreClicked, setShowMoreClicked] = useState(false); // State to track if "Explore More" button clicked
  const totalBlogs = blogs.length;
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleExploreMore = () => {
    setShowMoreClicked(true); // Set the state to indicate "Explore More" button clicked
    setDisplayedBlogs(prevCount => Math.min(prevCount + 6, totalBlogs));
  };

  return (
    <div className="flex flex-wrap justify-start">
      {blogs.slice(0, displayedBlogs).map((blog, index) => (
        <div key={index} className="w-full md:w-1/3 md:p-3 p-2 rounded-md md:mb-0 text-white blog-item">
          <Link to={`/blogs/${blog.id}`} onClick={scrollToTop} className="w-full overflow-hidden relative rounded-lg md:bg-transparent bg-[#18181ba6] border-solid transition duration-300 ease-in-out transform hover:bg-[#18181ba6] hover:shadow-lg">
            <div className="w-full overflow-hidden relative rounded-lg md:bg-transparent bg-[#18181ba6] border-solid border-[#f4f4f51d] transition duration-300 ease-in-out transform hover:bg-[#18181ba6] hover:shadow-lg">
              <img
                src={blog.imageUrl}
                alt="Blog_Image"
                className="w-full h-40 md:h-60 object-cover rounded-md"
                style={{
                  maskImage: 'linear-gradient(rgba(0, 0, 0, 1) 70%, transparent)'
                }}
              />
              <div className="p-4 relative z-10">
                <h3 className="md:text-xl text-[1rem] text-left leading-5">{blog.title}</h3>
                <p className="text-[#c9c9c9] md:text-[0.9rem] text-[0.8rem] text-left mt-2 leading-5">
                  {blog.bio}
                </p>
              </div>
            </div>
          </Link>
        </div>
      ))}
      {!showMoreClicked && displayedBlogs < totalBlogs && ( // Render Explore More button if there are more blogs to display
        <div className="w-full flex justify-center mt-4">
          <button className="main-button" onClick={handleExploreMore}>
            Explore More
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogGrid;
