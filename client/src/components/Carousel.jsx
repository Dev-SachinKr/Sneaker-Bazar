import React, { useEffect, useState } from 'react';

const carouselImages = [
  {
    url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Unleash Speed. Elevate Style.",
  },
  {
    url: "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Step Into The Future of Footwear",
  },
  {
    url: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/caa5fb122810393.60e1c5d28640e.jpg",
    caption: "Bold. Sleek. Powerful.",
  },
  {
    url: "https://images.unsplash.com/photo-1518894781321-630e638d0742?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Just See - WoW!!!"
  }
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-56 sm:h-72 md:h-96 lg:h-[500px] overflow-hidden rounded-xl shadow-xl bg-gray-900">
      {carouselImages.map((item, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === current ? 'opacity-100 z-20' : 'opacity-0 z-10'
          }`}
        >
          <img
            src={item.url}
            alt={`slide-${idx}`}
            className="w-full h-full object-cover"
          />

          {/* Dark overlay + caption */}
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center px-4 sm:px-6 md:px-10">
            <h2 className="text-white text-lg sm:text-2xl md:text-4xl font-extrabold text-center drop-shadow-xl leading-tight">
              {item.caption}
            </h2>
          </div>
        </div>
      ))}

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {carouselImages.map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full ${
              idx === current ? 'bg-white scale-110' : 'bg-white/50'
            } transition-all`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
