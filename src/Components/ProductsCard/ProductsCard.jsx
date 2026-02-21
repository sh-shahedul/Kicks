import React from 'react';

const ProductsCard = ({ product }) => {
    const { title, price,  images } = product;

    return (
        <div className="relative  rounded-2xl  hover:scale-105 transition-transform duration-300 md:h-[480px] `h-300px` flex flex-col justify-between">

            {/* Badge  */}
            <span className="absolute top-2 left-2 z-10 bg-blue-600 text-white text-xs font-bold px-3 py-0.5 rounded-tl-[50%] rounded-br-[50%] capitalize w-[58px] h-[38px]  text-center flex justify-center items-center">
                New
            </span>

            {/* Image  */}
            <div className=" rounded-xl flex items-center justify-center  min-h-[180px] overflow-hidden">
                <img
                    src={images}
                    alt={title}
                    className=" w-[300px] md:h-[350px] h-[200px] border-8 border-white object-cover rounded-4xl drop-shadow-lg "
                    
                />
            </div>

            {/* Product Title */}
            <h2 className="md:text-2xl text-lg font-black uppercase text-black leading-tight mt-3 mb-3 px-1 line-clamp-3">
                {title}
            </h2>

            {/* Button */}
      <button className="w-full bg-[#1a1a1a] hover:bg-[#333] transition-colors duration-200 text-white font-black text-xs uppercase tracking-widest py-3.5 rounded-xl flex items-center justify-center gap-1">
                View Product -
                <span className="text-orange-400">${price}</span>
            </button>
        </div>
    );
};

export default ProductsCard;