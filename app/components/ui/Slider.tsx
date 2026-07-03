"use client";

import { useState } from "react";

interface SliderProps {
  children: React.ReactNode[];
  itemsPerView?: number;
}

export default function Slider({ children, itemsPerView = 1 }: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalItems = children.length;
  const maxIndex = Math.max(0, totalItems - itemsPerView);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? maxIndex : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === maxIndex ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full">
      {/* Slider Container */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
          }}
        >
          {children.map((child, index) => (
            <div key={index} style={{ width: `${100 / itemsPerView}%` }} className="flex-shrink-0 px-4 sm:px-2">
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 -translate-x-0 sm:-translate-x-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white p-2 rounded-full shadow-lg transition"
        aria-label="Previous slide"
      >
        ◀
      </button>

      <button
        onClick={handleNext}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 translate-x-0 sm:translate-x-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white p-2 rounded-full shadow-lg transition"
        aria-label="Next slide"
      >
        ▶
      </button>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: totalItems - itemsPerView + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition ${
              index === currentIndex
                ? "bg-blue-600 dark:bg-blue-500 w-8"
                : "bg-gray-300 dark:bg-slate-600 w-2 hover:bg-gray-400 dark:hover:bg-slate-500"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
