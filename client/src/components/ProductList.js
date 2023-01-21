import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

const ProductList = ({ products, removeFromDOM }) => {

    const deleteProduct = (id) => {
        axios.delete('http://localhost:8000/api/product/' + id)
            .then(res => {
                console.log("Product Delete succesfully" , res);
                removeFromDOM(id);
            });
    }

    return (
        <div className='mx-auto' style={{ width: '350px' }}>
            <h1 className='mb-4'>All Products:</h1>
            <div className="list-group">
                {products.map((product, index) => {
                    // return <p key={index}><a href={'/' + product._id} className='text-dark bold'> {product.title} </a></p>
                    return (
                        <div key={index} className='list-group-item d-flex justify-content-between align-items-center'>
                            <Link key={index} to={'/' + product._id} className="text-start text-decoration-none me-4"> {product.title}</Link>
                            <button className="btn btn-danger" onClick={() => {window.confirm("Are you sure you want to delete this item") && deleteProduct(product._id)}} >Delete</button>
                        </div>
                    )
                })}
            </div>
        </div >
    )
}

export default ProductList