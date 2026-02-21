// import React from 'react';
// import mainShoe from "../../../src/assets/mainshoe.jpg";
// import thumb1 from "../../../src/assets/thumb1.jpg";
// import thumb2 from "../../../src/assets/thumb2.jpg";

// const Hero = () => {
//     return (
//         <div className=" px-4 pt-6 pb-10">

//             {/* ── Heading ── */}
//             <h1 className="font-black leading-none  mb-6 w-full md:text-[232px] text-5xl text-center">
//                 <span className="text-gray-900">DO IT </span>
//                 <span className="text-[#4B6BFB]">RIGHT</span>
//             </h1>

//             {/* ── Product Card ── */}
//             <div className="relative rounded-[50px] overflow-hidden w-full  aspect-[4/3] md:aspect-[16/7] ">

//                 {/* Background Image */}
//                 <img
//                     src={mainShoe}
//                     alt="Nike Air Max"
//                     className="absolute inset-0 w-full md:h-full object-cover object-center"
//                 />

//                 {/* linear overlay */}
//                 <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

//                 {/* Left vertical label */}
//                 <div className="absolute left-0 top-1/4 -translate-y-1/2">
//                     <div
//                         className="bg-gray-900/80 text-white text-[10px] font-semibold tracking-widest uppercase px-1.5 py-3"
//                         style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
//                     >
//                         Nike product of the year
//                     </div>
//                 </div>

//                 {/*  title + description + button */}
//                 <div className="absolute bottom-20 left-15 max-w-[60%]">
//                     <h2 className="text-white text-2xl md:text-7xl font-black leading-tight tracking-tight mb-1">
//                         NIKE AIR MAX
//                     </h2>
//                     <p className="text-gray-300 md:text-2xl text-sm mb-4 leading-snug">
//                         Nike introducing the new air max for <br /> everyone's comfort
//                     </p>
//                     <button className="bg-[#4B6BFB] hover:bg-[#3a58e0] text-white font-medium  px-4 py-2 rounded-md">
//                         SHOP NOW
//                     </button>
//                 </div>

//                 {/* Right-side thumbnails */}
//                 <div className="absolute bottom-5 right-4 flex flex-col gap-2">

//                     {/* Thumb 1 */}
//                     <div className="relative w-16 h-14 md:w-40 md:h-40  md:rounded-4xl rounded-xl border-3 border-white overflow-hidden">
                
//                         <img
//                             src={thumb1}
//                             alt="Thumbnail 1"
//                             className="w-full h-full object-cover  "
//                         />
//                     </div>

//                     {/* Thumb 2  */}
//                     <div className="relative w-16 h-14 md:w-40 md:h-40 md:rounded-4xl rounded-xl border-3 border-white overflow-hidden">
                        
//                         <img
//                             src={thumb2}
//                             alt="Thumbnail 2"
//                             className="w-full h-full object-cover "
//                         />
//                     </div>

//                 </div>
//             </div>

          
//         </div>
//     );
// };

// export default Hero;

import React from 'react';
import mainShoe from "../../../src/assets/mainshoe.jpg";
import thumb1 from "../../../src/assets/thumb1.jpg";
import thumb2 from "../../../src/assets/thumb2.jpg";

const Hero = () => {
    return (
        <div className=" px-4 pt-6 pb-10 max-w-7xl mx-auto">

            {/* ── Heading ── */}
            <h1 className="font-black leading-none  mb-6 w-full md:text-[199px] text-[58px] text-center">
                <span className="text-gray-900">DO IT </span>
                <span className="text-[#4B6BFB]">RIGHT</span>
            </h1>

            {/* ── Product Card ── */}
            <div className="relative rounded-[50px] overflow-hidden w-full aspect-[3/3] md:aspect-[16/7]">

                {/* Background Image */}
                <img
                    src={mainShoe}
                    alt="Nike Air Max"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />

                {/* linear overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Left vertical label */}
                <div className="absolute left-0 md:top-1/4 top-[35%]  -translate-y-1/2">
                    <div
                        className="bg-gray-900/80 text-white text-[10px] font-semibold tracking-widest uppercase px-1.5 py-3"
                        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                    >
                        Nike product of the year
                    </div>
                </div>

                {/*  title + description + button */}
                <div className="absolute bottom-5 left-5 md:bottom-20 md:left-15 max-w-[55%]">
                    <h2 className="text-white text-xl md:text-7xl font-black leading-tight tracking-tight mb-1">
                        NIKE AIR MAX
                    </h2>
                    <p className="text-gray-300 md:text-2xl text-xs mb-3 leading-snug">
                        Nike introducing the new air max for <br /> everyone's comfort
                    </p>
                    <button className="bg-[#4B6BFB] hover:bg-[#3a58e0] text-white font-medium text-xs md:text-base px-3 py-1.5 md:px-4 md:py-2 rounded-md">
                        SHOP NOW
                    </button>
                </div>

                {/* Right-side thumbnails */}
                <div className="absolute bottom-5 right-3 md:right-4 flex flex-col gap-2">

                    {/* Thumb 1 */}
                    <div className="relative w-16 h-14 md:w-40 md:h-40 md:rounded-4xl rounded-xl border-3 border-white overflow-hidden">
                        <img
                            src={thumb1}
                            alt="Thumbnail 1"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Thumb 2  */}
                    <div className="relative w-16 h-14 md:w-40 md:h-40 md:rounded-4xl rounded-xl border-3 border-white overflow-hidden">
                        <img
                            src={thumb2}
                            alt="Thumbnail 2"
                            className="w-full h-full object-cover"
                        />
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Hero;