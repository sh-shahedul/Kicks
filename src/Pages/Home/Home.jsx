import React from 'react';
import Hero from '../../Components/Hero/Hero';
import Products from '../../Components/Products/Products';
import Categories from '../../Components/Catogeries/Categories';
import Reviews from '../../Components/Reviews/Reviews';



const Home = () => {
    return (
        <div>
          <Hero></Hero>
          <Products></Products>
          <Categories></Categories>
          <Reviews></Reviews>
         
          
        </div>
    );
};

export default Home;