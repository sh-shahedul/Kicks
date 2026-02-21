import React from 'react';
import Hero from '../../Components/Hero/Hero';
import Products from '../../Components/Products/Products';
import Categories from '../../Components/Catogeries/Categories';


const Home = () => {
    return (
        <div>
          <Hero></Hero>
          <Products></Products>
          <Categories></Categories>
          
        </div>
    );
};

export default Home;