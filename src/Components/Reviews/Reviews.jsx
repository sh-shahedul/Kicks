import React from "react";

const reviews = [
  {
    id: 1,
    title: "Good Quality",
    text: "I highly recommend shopping from kicks",
    rating: 5,
    user: "../../../src/assets/user1.png",
    image: "../../../src/assets/sh1.png",
  },
  {
    id: 2,
    title: "Good Quality",
    text: "I highly recommend shopping from kicks",
    rating: 5,
    user: "../../../src/assets/user2.png",
    image: "../../../src/assets/sh2.png",
  },
  {
    id: 3,
    title: "Good Quality",
    text: "I highly recommend shopping from kicks",
    rating: 5,
    user: "../../../src/assets/user3.png",
    image: "../../../src/assets/sh3.png",
  },
];

const Reviews = () => {
  return (
    <section className="max-w-7xl mx-auto px-5 md:px-12 mt-20">
      <div className="flex justify-between items-center mb-10">
        <h2 className="md:text-7xl text-xl font-black">REVIEWS</h2>
        <button className="bg-blue-600 text-white px-5 py-2 rounded text-sm">SEE ALL</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((review,index) => (
          <div key={review.id}
        //    className="bg-white rounded-xl shadow-md overflow-hidden"
        className={`bg-white rounded-xl shadow-md overflow-hidden ${index > 0 ? "hidden md:block" : ""
            }`}
           >
            {/* Top info */}
            <div className="flex justify-between items-center p-4">
              <div>
                <h3 className="font-bold text-2xl">{review.title}</h3>
                <p className="text-base text-gray-600" >{review.text}</p>
                <div className="flex items-center mt-1">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                  <span className="ml-2 text-gray-500">{review.rating}.0</span>
                </div>
              </div>
              <img
                src={review.user}
                alt="user"
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>

            {/* Review image */}
            <img
              src={review.image}
              alt="review"
              className="w-full h-56 object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews