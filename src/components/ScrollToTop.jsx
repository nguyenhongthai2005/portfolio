import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div 
        className={`transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
      >
        <button
          onClick={scrollToTop}
          className="p-3 bg-primary text-on-primary rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center"
          aria-label="Lên đầu trang"
        >
          <span className="material-symbols-outlined">arrow_upward</span>
        </button>
      </div>
    </div>
  );
};

export default ScrollToTop;
