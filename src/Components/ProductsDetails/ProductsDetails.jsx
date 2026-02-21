import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { FaHeart } from "react-icons/fa";
import AllProducts from "../AllProducts/AllProducts";

const ProductsDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(42);
  const [wishlist, setWishlist] = useState(false);

  const sizes = [38, 39, 40, 41, 42, 43, 44, 45, 46, 47];

  useEffect(() => {
    axios
      .get(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setCurrentIndex(0);
      })
      .catch((err) => console.log(err));
  }, [id]);


  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
          <p className="text-gray-500 font-medium">Loading product...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-5  md:px-12 py-6 md:py-10">
      <div className="grid md:grid-cols-3 gap-6 md:gap-10">

        {/* ─── LEFT SIDE ─── */}
        <div className="col-span-2">

          {/* ── MOBILE CAROUSEL ── */}
          <div className="md:hidden">
            <div
              className="relative bg-gray-100 rounded-2xl overflow-hidden"
            
            >
              <img
                src={product.images[currentIndex]}
                alt={product.title}
                className="w-full h-[300px]  transition-all duration-300"
              />

           

              {/* Dot indicators */}
              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
                {product.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`rounded-full transition-all duration-200 ${
                      currentIndex === index
                        ? "bg-blue-600 w-5 h-2.5"
                        : "bg-gray-400 w-2.5 h-2.5"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2 mt-3 overflow-x-auto pb-1 scrollbar-hide">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`shrink-0 h-[72px] rounded-xl overflow-hidden border-2 transition-all ${
                    currentIndex === index
                      ? "border-black scale-105"
                      : "border-transparent opacity-70"
                  }`}
                >
                  <img
                    src={img}
                    alt={`thumb-${index}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* ── DESKTOP GRID ── */}
          <div className="hidden md:grid grid-cols-2 gap-3 rounded-3xl overflow-hidden">
            {product.images.map((img, index) => (
              <div key={index} className="bg-gray-100 overflow-hidden rounded-2xl">
                <img
                  src={img}
                  alt={`product-${index}`}
                  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ─── RIGHT SIDE ─── */}
        <div className="flex flex-col">

          {/* Badge */}
          <span className="self-start bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full tracking-wide">
            New Release
          </span>

          {/* Title */}
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mt-3 leading-snug">
            {product.title}
          </h1>

          {/* Price */}
          <p className="text-blue-600 text-2xl font-bold mt-2">
            ${product.price}
          </p>

          {/* Divider */}
          <hr className="my-5 border-gray-200" />

          {/* Color */}
          <div>
            <p className="text-xs font-bold tracking-widest text-gray-500 mb-3">
              COLOR
            </p>
            <div className="flex gap-3">
              <button className="w-9 h-9 rounded-full bg-gray-800 ring-2 ring-black ring-offset-2 transition" />
              <button className="w-9 h-9 rounded-full bg-gray-400 hover:ring-2 hover:ring-gray-400 hover:ring-offset-2 transition" />
            </div>
          </div>

          {/* Size */}
          <div className="mt-6">
            <div className="flex justify-between items-center mb-3">
              <p className="text-xs font-bold tracking-widest text-gray-500">SIZE</p>
              <button className="text-xs font-semibold underline underline-offset-2 text-gray-500 hover:text-black transition">
                SIZE CHART
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-12 rounded-lg text-sm font-semibold border transition-all duration-150 active:scale-95 ${
                    selectedSize === size
                      ? "bg-black text-white border-black"
                      : "bg-white text-gray-700 border-transparent hover:border-gray-300"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart + Wishlist */}
          <div className="flex gap-3 mt-6">
            <button className="flex-1 bg-black text-white py-3.5 rounded-xl font-bold text-sm tracking-wide hover:bg-gray-900 active:scale-[0.98] transition-all duration-150">
              ADD TO CART
            </button>
            <button
              onClick={() => setWishlist((prev) => !prev)}
              className={`w-14 rounded-xl flex items-center justify-center border-2 transition-all duration-200 active:scale-95 ${
                wishlist
                  ? "bg-red-500 border-red-500 text-white"
                  : "bg-black border-gray-200 text-white "
              }`}
            >
              <FaHeart className="text-lg" />
            </button>
          </div>

          {/* Buy Now */}
          <button className="w-full bg-indigo-600 text-white py-3.5 rounded-xl font-bold text-sm tracking-wide mt-3 hover:bg-indigo-700 active:scale-[0.98] transition-all duration-150">
            BUY IT NOW
          </button>

          {/* Description */}
          <div className="mt-6 bg-gray-50 rounded-2xl p-4">
            <h3 className="text-xs font-bold tracking-widest text-gray-500 mb-2">
              ABOUT THE PRODUCT
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {product.description}
            </p>
          </div>
        </div>
      </div>

       <AllProducts></AllProducts>
    </div>

  );
};

export default ProductsDetails;