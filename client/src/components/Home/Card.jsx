import { useEffect, useRef, useState } from "react";

const Card = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrollable, setIsScrollable] = useState(false);
  const contentRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const contentWidth = contentRef.current.scrollWidth;
    const containerWidth = containerRef.current.clientWidth;
    setIsScrollable(contentWidth > containerWidth);
  }, [scrollPosition]);

  const scrollLeft = () => {
    setScrollPosition((prevPosition) => Math.max(prevPosition - 50, 0)); // Adjust the scroll speed as needed
  };

  const scrollRight = () => {
    const contentWidth = contentRef.current.scrollWidth;
    const containerWidth = containerRef.current.clientWidth;
    setScrollPosition((prevPosition) =>
      Math.min(prevPosition + 50, contentWidth - containerWidth)
    ); // Adjust the scroll speed as needed
  };

  return (
    <div className="flex items-center justify-center">
    <div ref={containerRef} className="scroll-container relative overflow-hidden border border-gray-200 w-80">
      <div ref={contentRef} className="content flex" style={{ transform: `translateX(-${scrollPosition}px)` }}>
        {/* Your content goes here */}
        <div className="w-48 h-48 bg-red-500"></div>
        <div className="w-48 h-48 bg-blue-500"></div>
        <div className="w-48 h-48 bg-green-500"></div>
        {/* Add more content here */}
      </div>
    </div>
    <button className="ml-2" onClick={scrollLeft} disabled={!isScrollable || scrollPosition === 0}>Left</button>
    <button className="ml-2" onClick={scrollRight} disabled={!isScrollable || scrollPosition >= contentRef.current?.scrollWidth - containerRef.current?.clientWidth}>Right</button>
  </div>
  );
};

export default Card;
