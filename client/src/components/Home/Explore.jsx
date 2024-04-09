import React, { useRef } from "react";

const Explore = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      const currentScrollLeft = scrollRef.current.scrollLeft;
      const newScrollLeft = currentScrollLeft - 100; // Adjust scroll speed as needed
      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const currentScrollLeft = scrollRef.current.scrollLeft;
      const newScrollLeft = currentScrollLeft + 100; // Adjust scroll speed as needed
      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative bg-white shadow-md shadow-gray-300 border w-full rounded-lg p-5 mt-10">
      <h className="text-2xl font-bold my-5">Explore the world</h>
      <div className="p-2 mt-3">
        {/* <button
          className="absolute left-0 top-0 bg-gray-200 hover:bg-gray-300 z-10"
          onClick={scrollLeft}>
          &lt;
        </button> */}
        <div
          className="overflow-x-auto whitespace-nowrap hide-scrollbar"
          ref={scrollRef}>
          {/* Your content goes here */}
          <img
            src="https://w.forfun.com/fetch/6a/6accc29963c2b9b03b0b91ba32b816d4.jpeg"
            className="inline-block w-[15%] h-[220px] bg-gray-400 mr-4 rounded-lg"
          />
          <img
            src="https://w.forfun.com/fetch/6a/6accc29963c2b9b03b0b91ba32b816d4.jpeg"
            className="inline-block w-[15%] h-[220px] bg-gray-400 mr-4 rounded-lg"
          />
          {/* Add margin-right to create a gap between images */}
          <img
            src="https://w.forfun.com/fetch/6a/6accc29963c2b9b03b0b91ba32b816d4.jpeg"
            className="inline-block w-[15%] h-[220px] bg-gray-400 mr-4 rounded-lg"
          />
          <img
            src="https://w.forfun.com/fetch/6a/6accc29963c2b9b03b0b91ba32b816d4.jpeg"
            className="inline-block w-[15%] h-[220px] bg-gray-400 mr-4 rounded-lg"
          />
          <img
            src="https://w.forfun.com/fetch/6a/6accc29963c2b9b03b0b91ba32b816d4.jpeg"
            className="inline-block w-[15%] h-[220px] bg-gray-400 mr-4 rounded-lg"
          />
          <img
            src="https://w.forfun.com/fetch/6a/6accc29963c2b9b03b0b91ba32b816d4.jpeg"
            className="inline-block w-[15%] h-[220px] bg-gray-400 mr-4 rounded-lg"
          />
          <img
            src="https://w.forfun.com/fetch/6a/6accc29963c2b9b03b0b91ba32b816d4.jpeg"
            className="inline-block w-[15%] h-[220px] bg-gray-400 mr-4 rounded-lg"
          />
        </div>
        {/* <button
          className="absolute right-0 top-0 bg-gray-200 hover:bg-gray-300 z-10"
          onClick={scrollRight}>
          &gt;
        </button> */}
      </div>
    </div>
  );
};

export default Explore;
