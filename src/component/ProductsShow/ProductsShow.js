import React from 'react';

const ProductsShow = ({ product, cartClicked }) => {
    const { description, image, title, price } = product
    return (
        <div className="col">
            <div className="card h-100">
                <div className='d-flex align-items-center p-4' style={{ height: '400px' }} >
                    <img src={image} className="card-img-top h-100" alt="" />
                </div>
                <div className="card-body">
                    <h5 title={title} className="card-title">{title.slice(0, 20)}...</h5>
                    <p className="card-text">{description.slice(0, 80)}...</p>
                    <h3>${price}</h3>
                    <div>
                        <button className='btn btn-info text-white m-2'>Details</button>
                        <button onClick={() => cartClicked()} className='btn btn-primary m-2'>Add to Cart</button>
                        <button className='btn btn-success m-2'>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsShow;