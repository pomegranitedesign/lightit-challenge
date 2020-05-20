import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Products from './Products'

const App = () => {
	const [ isLoading, setIsLoading ] = useState(false)
	const [ products, setProducts ] = useState([])

	useEffect(() => {
		const fetchProducts = async () => {
			setIsLoading(true)
			const response = await axios.get(
				'http:///smktesting.herokuapp.com/api/products'
			)

			if (response.status === 200) {
				setProducts(response.data)
				setIsLoading(false)
			} else if (response.status === 500) {
				setProducts([])
				setIsLoading(false)
			}
		}

		fetchProducts()
	}, [])

	return <Products products={products} />
}

export default App
