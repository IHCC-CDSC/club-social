import React, { useState, useEffect } from 'react';

interface Slide {
  title: string;
  date: string;
  content: string;
}

const slides: Slide[] = [
  {
    title: 'Announcement Thingy',
    date: '9/4/2024',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...',
  },
  {
    title: 'Second Announcement',
    date: '9/5/2024',
    content: 'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, felis urna tempor massa.',
  },
  {
    title: 'Third Announcement',
    date: '9/6/2024',
    content: 'Phasellus euismod pharetra ante sit amet pharetra. Vestibulum tincidunt risus a massa consequat, eget luctus tortor vestibulum.',
  },
];

// Utility function to truncate text
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
};

const Announcements: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [fade, setFade] = useState<boolean>(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade out
      setTimeout(() => {
        setCurrentSlide(prevSlide => (prevSlide + 1) % slides.length);
        setFade(true); // Start fade in
      }, 500); // Match with fade-out duration
    }, 15000); // 10 seconds interval

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const handleIndicatorClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <>
          <div
            className={`w-2/3 flex flex-col justify-end transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className="p-2">
              <p className="text-3xl">
                {slides[currentSlide].title}
              </p>
              <p className="text-xl">
                {slides[currentSlide].date}
              </p>
              <p className="text-md pt-2">
                {truncateText(slides[currentSlide].content, 100)}
              </p>
            </div>
          </div>
          <div className="w-1/3 flex flex-col justify-end">
            <div className="flex justify-end">
              {slides.map((_, index) => (
                <div
                  key={index}
                  onClick={() => handleIndicatorClick(index)}
                  className={`mx-1 rounded-full border-2 border-ihccWhite w-5 h-5 flex items-center justify-center cursor-pointer transition-colors duration-300 ${
                    currentSlide === index ? 'bg-ihccYellow' : 'bg-ihccWhite'
                  }`}
                >
                </div>
              ))}
            </div>
          </div>
    </>
  );
}

export default Announcements;
