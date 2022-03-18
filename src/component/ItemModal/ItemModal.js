import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ItemModal = ({ product }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button className='text-white' variant="info" onClick={handleShow}>
                Details
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{product.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='row align-items-center'>
                        <div className='col-12 col-lg-4'>
                            <img className='w-100' src={product.image} alt="" />
                            <p className='text-center'><small>{product.category}</small></p>
                        </div>
                        <div className='col-12 col-lg-8'>
                            <p>{product.description}</p>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={handleClose}>
                        Buy Now
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ItemModal;