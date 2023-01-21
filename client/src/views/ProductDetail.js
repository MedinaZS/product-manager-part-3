import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const ProductDetail = () => {

    //Parametros de la url
    const { id } = useParams();

    const [product, setProduct] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setProduct(res.data);
            })
    });

    const deleteProduct = (id) => {
        axios.delete('http://localhost:8000/api/product/' + id)
            .then(res => {
                console.log("Product Delete succesfully" , res);
                //Go to homepage
                navigate('/')
            });
    }

    return (
        <div className='product-detail'>
            <h1>{product.title}</h1>
            <p><strong>Price: </strong> ${product.price}</p>
            <p><strong>Description: </strong> {product.description}</p>
            <hr />
            
            <Link to={'/'} className='btn btn-outline-secondary me-4'>Go Home</Link>
            <button className="btn btn-outline-danger me-4" onClick={() => {window.confirm("Are you sure you want to delete this item") && deleteProduct(product._id)}}   >Delete</button>
            <Link to={"/" + product._id + "/edit"} className="btn btn-success">Edit</Link>
        </div>
    )
}

export default ProductDetail