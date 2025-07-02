import React, { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    title: "Step Into Style",
    subtitle: "Discover the freshest kicks in town",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 2,
    title: "Run Faster",
    subtitle: "Upgrade your sneaker game",
    image:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 3,
    title: "Fresh Drops",
    subtitle: "New arrivals daily",
    image:
      "https://images.unsplash.com/photo-1570464197285-9949814674a7?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    }, 4000);
    return () => clearTimeout(timer);
  }, [current, length]);

  return (
    <section className="relative h-[60vh] overflow-hidden rounded-md">
      {/* Background images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-0" : "opacity-0 -z-10"
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}

      {/* Text with white translucent background */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-black text-center px-4 z-10 pointer-events-none">
        <div className="bg-white bg-opacity-70 px-6 py-4 rounded pointer-events-auto max-w-[90%] sm:max-w-md">
          <h1 className="text-4xl sm:text-5xl font-bold mb-2">
            {slides[current].title}
          </h1>
          <p className="text-lg sm:text-xl mb-4">{slides[current].subtitle}</p>
          <a
            href="/products"
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded font-semibold transition"
          >
            Shop Now
          </a>
        </div>
      </div>

      {/* Controls */}
      <button
        onClick={() => setCurrent(current === 0 ? length - 1 : current - 1)}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-80 text-black rounded-full p-2 z-20"
        aria-label="Previous Slide"
      >
        ‹
      </button>
      <button
        onClick={() => setCurrent(current === length - 1 ? 0 : current + 1)}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-80 text-black rounded-full p-2 z-20"
        aria-label="Next Slide"
      >
        ›
      </button>
    </section>
  );
}
