import React, { useEffect, useState } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos, MdArrowOutward } from "react-icons/md";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // detect mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slidesPerView = 2;

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + 1, categories.length - slidesPerView)
    );
  };

  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex >= categories.length - slidesPerView;

  return (
    <section className="bg-[#1c1c1c] max-w-7xl mx-auto ">

      {/* Header */}
      <div className="flex items-center justify-between md:py-15 py-8 ml-5 md:ml-12">
        <h2 className="text-white text-2xl md:text-4xl font-bold tracking-widest ">
          CATEGORIES
        </h2>
        <div className="flex gap-2 pr-5 md:pr-10">
          <button
            onClick={handlePrev}
            disabled={isPrevDisabled}
            className={`w-10 h-10 rounded-xl flex items-center justify-center 
              ${isPrevDisabled ? "bg-[#2a2a2a] text-black" : "bg-white text-black hover:bg-[#444] cursor-pointer"}`}
          >
            <MdArrowBackIosNew />
          </button>
          <button
            onClick={handleNext}
            disabled={isNextDisabled}
            className={`w-10 h-10 rounded-xl flex items-center justify-center 
              ${isNextDisabled ? "bg-[#2e2e2e] text-white" : "bg-white text-black hover:bg-[#444] cursor-pointer"}`}
          >
            <MdArrowForwardIos />
          </button>
        </div>
      </div>

      {/* Card Slider */}
      {loading ? (
        <div className="flex flex-col md:flex-row gap-4">
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              className="w-full md:w-1/2 h-[300px] md:h-[600px] bg-[#d8d8d8] animate-pulse rounded-2xl"
            />
          ))}
        </div>
      ) : error ? (
        <p className="text-red-400">{error}</p>
      ) : (
        <div className="bg-[#efefef] rounded-tl-4xl overflow-hidden ml-5 md:ml-12">
          <div className="overflow-hidden">
            <div
              className="flex flex-col md:flex-row flex-wrap md:flex-nowrap transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (isMobile ? 100 : 50)}%)`,
                height: isMobile ? "600px" : "600px",
              }}
            >
              {categories.map((cat, idx) => (
                <div
                  key={cat.id}
                  className="relative shrink-0 group"
                  style={{
                    width: isMobile ? "100%" : "50%",
                    height: isMobile ? "300px" : "600px",
                    borderRight:
                      !isMobile && idx < categories.length - 1
                        ? "2px solid #d8d8d8"
                        : "none",
                  }}
                >
                  {/* Image */}
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Bottom label */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
                    <h3
                      className="text-[#111] text-lg md:text-4xl font-semibold uppercase leading-tight w-[200px]">
                      {cat.name}
                    </h3>
                    <button className="w-9 h-9 rounded-lg bg-black text-white flex items-center justify-center hover:bg-[#333] transition-colors shadow-md shrink-0 ml-2">
                    <MdArrowOutward />
                 </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Categories;