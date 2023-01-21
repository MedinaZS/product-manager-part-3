import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductCreateForm from '../components/ProductCreateForm'
import ProductList from '../components/ProductList';

const Main = () => {
	const [products, setProducts] = useState([]);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		console.log('use effect');
		axios.get('http://localhost:8000/api/products')
			.then(res => {
				setProducts(res.data);
				setLoaded(true);
			})
	}, [])

	const removeFromDOM = (id) => {
		setProducts(products.filter(product => product._id !== id));
	}

	return (
		<div className='mb-5'>
			<ProductCreateForm />
			<hr />
			{loaded && <ProductList products={products} removeFromDOM={removeFromDOM} />}
		</div>

	)
}

export default Main