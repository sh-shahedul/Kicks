import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductsCard from '../ProductsCard/ProductsCard';

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://api.escuelajs.co/api/v1/products')
        .then(res => setProducts(res.data.slice(0,4)))
        .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <div className='max-w-7xl mx-auto px-5 md:px-12 flex  items-end justify-between mb-3 mt-4 '>
                <h2 className='md:text-7xl text-2xl md:leading-16 font-bold'>DON'T MISS OUT <br /> NEW DROPS</h2>
                <button className='mt-6 md:mt-0 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold md:px-8 px-2 py-3 rounded-md transition duration-300'>SHOP NEW DROPS</button>
            </div>
          
        <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 md:px-12 px-5 py-4 max-w-7xl mx-auto">
            {
                products.map(product => (
                    <ProductsCard key={product.id} product={product} />
                ))
            }
        </div>
        </div>
    );
};

export default Products;