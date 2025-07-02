// client/src/components/Carousel.jsx

import React, { useEffect, useState } from 'react';

const carouselImages = [
  "https://graphicsfamily.com/wp-content/uploads/edd/2021/07/Free-Sports-Running-Shoes-Banner-Design.jpg",
  "https://img.freepik.com/premium-vector/shoe-social-media-cover-banner-template-exclusive-collection-sneakers-facebook-cover-photo-design_755018-1873.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/fs/caa5fb122810393.60e1c5d28640e.jpg"
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % carouselImages.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[350px] overflow-hidden mb-10 rounded-md shadow relative">
      {carouselImages.map((url, idx) => (
        <img
          key={idx}
          src={url}
          alt={`slide-${idx}`}
          className={`w-full h-full object-fill absolute transition-opacity duration-1000 ${
            idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        />
      ))}
    </div>
  );
};

export default Carousel;
