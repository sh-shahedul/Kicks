// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="mt-12 px-12 max-w-7xl mx-auto">
//       {/* Top Blue Section */}
//       <div className="bg-blue-600 text-white px-5 md:px-12 py-10 flex flex-col md:flex-row justify-between items-center rounded-t-3xl">
//         <div className="mb-4 md:mb-0">
//           <h2 className="text-2xl md:text-3xl font-bold">JOIN OUR KICKSPLUS CLUB & GET 15% OFF</h2>
//           <p className="text-sm md:text-base mt-2">Sign up for free! Join the community.</p>
//         </div>
//         <div className="flex items-center space-x-2">
//           <input
//             type="email"
//             placeholder="Email address"
//             className="px-4 py-2 rounded-l-md text-black focus:outline-none"
//           />
//           <button className="bg-black px-4 py-2 rounded-r-md text-white font-semibold hover:bg-gray-800">
//             SUBMIT
//           </button>
//         </div>
//       </div>

//       {/* Bottom Black Section */}
//       <div className="bg-gray-900 text-white px-5 md:px-12 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 rounded-t-3xl">
//         {/* About Us */}
//         <div>
//           <h3 className="font-bold text-lg mb-2">About us</h3>
//           <p className="text-sm text-gray-300">
//             We are the biggest hyperstore in the universe. We got you all cover with our exclusive collections and latest drops.
//           </p>
//         </div>

//         {/* Categories */}
//         <div>
//           <h3 className="font-bold text-lg mb-2">Categories</h3>
//           <ul className="text-sm text-gray-300 space-y-1">
//             <li>Runners</li>
//             <li>Sneakers</li>
//             <li>Basketball</li>
//             <li>Outdoor</li>
//             <li>Golf</li>
//             <li>Hiking</li>
//           </ul>
//         </div>

//         {/* Company */}
//         <div>
//           <h3 className="font-bold text-lg mb-2">Company</h3>
//           <ul className="text-sm text-gray-300 space-y-1">
//             <li>About</li>
//             <li>Contact</li>
//             <li>Blogs</li>
//           </ul>
//         </div>

//         {/* Follow Us */}
//         <div>
//           <h3 className="font-bold text-lg mb-2">Follow us</h3>
//           <div className="flex space-x-3">
//             <a href="#" className="hover:text-gray-400">FB</a>
//             <a href="#" className="hover:text-gray-400">IG</a>
//             <a href="#" className="hover:text-gray-400">TW</a>
//             <a href="#" className="hover:text-gray-400">TT</a>
//           </div>
//         </div>
//       </div>

//       {/* Logo / Branding at the Bottom */}
//       <div className="bg-gray-900 text-white px-5 md:px-12 py-4 flex justify-center items-center">
//         <h1 className="text-4xl font-extrabold">KICKS</h1>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import logo from "../../../src/assets/kicks.png"
import group from "../../../src/assets/Group1.png"

const Footer = () => {
  return (
    <footer className=" mt-12 px-12 max-w-7xl mx-auto ">
      {/* Top Blue Section */}
      <div className="relative  bg-blue-600 rounded-4xl">
        <div className=" text-white px-5 md:px-12 py-10 flex flex-col md:flex-row justify-between items-center rounded-t-3xl ">
        <div className="mb-4 md:mb-0 max-w-md">
          <h2 className="text-2xl md:text-4xl font-bold">JOIN OUR KICKSPLUS CLUB & GET 15% OFF</h2>
          <p className="text-sm md:text-base mt-2">Sign up for free! Join the community.</p>
          <div className="flex mt-4 gap-2">
            <input
              type="email"
              placeholder="Email address"
              className="px-4 py-2 rounded-md focus:outline-none w-full md:w-auto border border-white text-white"
            />
            <button className="bg-black px-4 py-2 rounded-md text-white font-semibold hover:bg-gray-800">
              SUBMIT
            </button>
          </div>
        </div>
        <div>
            <img src={group} alt="" 
            className="w-[350px] h-[85px] mr-[80px]"
            />
        </div>
      </div>


      {/* Bottom Black Section */}
      <div className="bg-gray-900 text-white px-5 md:px-12 pt-12  rounded-4xl ">
        
       

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 relative z-20">
          {/* About Us */}
          <div className="col-span-2">
            <h3 className="font-bold text-lg mb-2 text-orange-400">About us</h3>
            <p className="text-base text-gray-300">
              We are the biggest hyperstore in the universe. <br /> We got you all cover with our exclusive <br /> collections and latest drops.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-bold text-lg mb-2 text-orange-400">Categories</h3>
            <ul className="text-base text-gray-300 space-y-1">
              <li>Runners</li>
              <li>Sneakers</li>
              <li>Basketball</li>
              <li>Outdoor</li>
              <li>Golf</li>
              <li>Hiking</li>
            </ul>
          </div>

          {/* Company */}
          <div >
            <h3 className="font-bold text-lg mb-2 text-orange-400">Company</h3>
            <ul className="text-base text-gray-300 space-y-1">
              <li>About</li>
              <li>Contact</li>
              <li>Blogs</li>
            </ul>
          </div>

          {/* Follow Us */}
          <div >
            <h3 className="font-bold text-lg mb-2 text-orange-400">Follow us</h3>
            <div className="flex space-x-3 text-white">
              <a href="#" className="hover:text-gray-400"><FaFacebookF /></a>
              <a href="#" className="hover:text-gray-400"><FaInstagram /></a>
              <a href="#" className="hover:text-gray-400"><FaTwitter /></a>
              <a href="#" className="hover:text-gray-400"><SiTiktok /></a>
            </div>
          </div>
        </div>
        <img src={logo} alt="" className="mt-15" />
      </div>
      </div>
       <div>
           <h1 className="text-center p-3 text-base">© All rights reserved </h1>
       </div>
    </footer>
  );
};

export default Footer;