import React from 'react';
import './Menubar.css'

const Menubar = () => {
    return (
        <div className='bg-primary p-3'>
            <div className="container">
                <div className="row text-white">
                    <div className="col-md-2">Logo</div>
                    <div className="col-md-10">
                        <div className='list d-flex'>
                            <li>Home</li>
                            <li>Contact</li>
                            <li>Cart</li>
                            <li>Login</li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menubar;