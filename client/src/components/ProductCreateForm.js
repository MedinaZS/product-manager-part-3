import React, { useState } from 'react';
import axios from 'axios'

const ProductCreateForm = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    const onSubmitHandler = (event) => {
        event.preventDefault();
        //Send to the backend to save to the database
        axios.post('http://localhost:8000/api/product', { title, price, description })
            .then(res => console.log("Response", res))
            .catch(err => console.log("Error", err));

        clearInputs();
    }

    const clearInputs = () => {
        setTitle("");
        setPrice(0);
        setDescription("");
        document.getElementById("title").focus();
    }

    return (
        <form className='text-center my-5 mx-auto' onSubmit={onSubmitHandler} style={{ width: '350px' }}>
            <h1>Product Manager</h1>

            <div className='mt-4'>
                <div className="input-group mb-3">
                    <span className="input-group-text">Title</span>
                    <input id='title' type="text" className="form-control" value={title} onChange={e => setTitle(e.target.value)} required />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">Price</span>
                    <input type="number" className="form-control" min={0} value={price} onChange={e => setPrice(e.target.value)} required />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">Description</span>
                    <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)} required />
                </div>
                <button type="submit" className="btn btn-success px-4 text-center">Create</button>
            </div>
        </form>
    )
}

export default ProductCreateForm