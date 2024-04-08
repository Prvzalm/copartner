import React from 'react';
import { Group } from '../assets';

const Stock = () => {
  return (
    <div className="p-3 mb-4">
      {/* Container 1 */}
      <div className="flex flex-col md:flex-row mb-8 md:text-left text-center items-center">
        {/* Left Column */}
        <div className="flex-1 md:pr-8 mb-8 md:mb-0">
          <h2 className="subheading-color font-bold md:text-6xl text-4xl md:leading-[70px] leading-[40px] md:pl-[50px]">Our Stock Market <br/>Expertise</h2>
         <p className='text-90 md:text-xl text-md text-[#ffffff7d] md:px-[3rem] px-1 md:hidden'>Guiding traders towards profitable decisions in the dynamic stock market landscape.</p> 
          <p className="text-90 md:text-xl text-[#ffffff7d] mb-6 md:px-[3rem] px-4 md:block hidden">Tap into our stock market expertise and elevate your trading journey with informed insights and strategic guidance.
          <br/>
          Guiding traders towards profitable decisions in the dynamic stock market landscape.
          </p>
          <div className='ml-12 md:block hidden'>
            <a href="/" className='main-button'>Join Expert Team</a>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 relative">
          {/* Add your stock image here */}
          <img
            src={Group}
            alt="Stock"
            className="w-90"
            style={{
              maskImage: 'linear-gradient(rgba(0, 0, 0, 1) 70%, transparent)',
            }}
          />
          <div className='md:hidden'>
          <a href="/" className='main-button'>Join Expert Team</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stock;
