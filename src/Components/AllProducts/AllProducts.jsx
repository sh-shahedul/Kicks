// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import ProductsCard from '../ProductsCard/ProductsCard';

// const AllProducts = () => {

//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         axios.get('https://api.escuelajs.co/api/v1/products')
//         .then(res => setProducts(res.data.slice(0,4)))
//         .catch(err => console.log(err))
//     }, [])

//     return (
//         <div className='mt-18 mb-22'>
           
          
//         <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 md:px-12 px-5 py-4 max-w-7xl mx-auto">
//             {
//                 products.map(product => (
//                     <ProductsCard key={product.id} product={product} />
//                 ))
//             }
//         </div>
//         </div>
//     );
// };

// export default AllProducts;

// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import ProductsCard from '../ProductsCard/ProductsCard';
// import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';

// const ITEMS_PER_PAGE = 4;

// const AllProducts = () => {
//     const [products, setProducts] = useState([]);
//     const [currentIndex, setCurrentIndex] = useState(0);

//     useEffect(() => {
//         axios.get('https://api.escuelajs.co/api/v1/products')
//             .then(res => setProducts(res.data))
//             .catch(err => console.log(err));
//     }, []);

//     const totalSlides = Math.ceil(products.length / ITEMS_PER_PAGE);
//     const currentProducts = products.slice(
//         currentIndex * ITEMS_PER_PAGE,
//         currentIndex * ITEMS_PER_PAGE + ITEMS_PER_PAGE
//     );

//     const handlePrev = () => setCurrentIndex(prev => Math.max(prev - 1, 0));
//     const handleNext = () => setCurrentIndex(prev => Math.min(prev + 1, totalSlides - 1));

//     const isPrevDisabled = currentIndex === 0;
//     const isNextDisabled = currentIndex >= totalSlides - 1;

//     return (
//         <div className='mt-18 mb-22'>

//             {/* Navigation */}
//             <div className="flex justify-end gap-2 md:px-12 px-5 mb-4">
//                 <button
//                     onClick={handlePrev}
//                     disabled={isPrevDisabled}
//                     className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors
//                         ${isPrevDisabled
//                             ? 'bg-gray-100 text-gray-300 cursor-not-allowed'
//                             : 'bg-gray-800 text-white hover:bg-black cursor-pointer'}`}
//                 >
//                     <MdArrowBackIosNew />
//                 </button>
//                 <button
//                     onClick={handleNext}
//                     disabled={isNextDisabled}
//                     className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors
//                         ${isNextDisabled
//                             ? 'bg-gray-100 text-gray-300 cursor-not-allowed'
//                             : 'bg-gray-800 text-white hover:bg-black cursor-pointer'}`}
//                 >
//                     <MdArrowForwardIos />
//                 </button>
//             </div>

//             {/* Grid */}
//             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:px-12 px-5 py-4 max-w-7xl mx-auto">
//                 {currentProducts.map(product => (
//                     <ProductsCard key={product.id} product={product} />
//                 ))}
//             </div>

//             {/* Dot Indicators */}
//             {totalSlides > 1 && (
//                 <div className="flex justify-center gap-2 mt-4">
//                     {Array.from({ length: totalSlides }).map((_, i) => (
//                         <button
//                             key={i}
//                             onClick={() => setCurrentIndex(i)}
//                             className={`h-2 rounded-full transition-all duration-300 ${
//                                 i === currentIndex
//                                     ? 'bg-gray-800 w-6'
//                                     : 'bg-gray-300 w-2 hover:bg-gray-400'
//                             }`}
//                         />
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default AllProducts;

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductsCard from '../ProductsCard/ProductsCard';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';

const VISIBLE = 4;

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        axios.get('https://api.escuelajs.co/api/v1/products')
            .then(res => setProducts(res.data))
            .catch(err => console.log(err));
    }, []);

    const maxIndex = Math.max(products.length - VISIBLE, 0);
    const currentProducts = products.slice(currentIndex, currentIndex + VISIBLE);

    const handlePrev = () => setCurrentIndex(prev => Math.max(prev - 1, 0));
    const handleNext = () => setCurrentIndex(prev => Math.min(prev + 1, maxIndex));

    const isPrevDisabled = currentIndex === 0;
    const isNextDisabled = currentIndex >= maxIndex;

    return (
        <div className='mt-18 '>
            <div className='flex justify-between items-center'>
                <div className='mb-10'>
                <h1 className='md:text-5xl text-2xl ffont-bold '>You may also like</h1>
            </div>
            {/* Navigation */}
            <div className="flex justify-end gap-2 md:px-12 px-5 mb-4">
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

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4    mx-auto">
                {currentProducts.map(product => (
                    <ProductsCard key={product.id} product={product} />
                ))}
            </div>

            {/* dot per visible card  */}
            {currentProducts.length > 0 && (
                <div className="flex justify-center gap-2 mt-4">
                    {currentProducts.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentIndex(Math.min(currentIndex + i, maxIndex))}
                            className={`h-1 rounded-full transition-all duration-300 w-8 ${
                                i === 0
                                    ? 'bg-blue-600'
                                    : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default AllProducts;