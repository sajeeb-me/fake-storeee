import React, { useEffect, useState } from 'react';
import ProductsShow from '../ProductsShow/ProductsShow';

const AllProducts = ({ cartClicked }) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
    }, [])
    return (
        <div className='container my-5 pt-4'>
            <h1 className='mb-4'>All Products</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    products.map(product => <ProductsShow key={product.id} product={product} cartClicked={cartClicked}></ProductsShow>)
                }
            </div>
        </div>
    );
};

export default AllProducts;