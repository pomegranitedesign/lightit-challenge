import React from 'react'
import { Card, Button } from 'antd'
import { Link } from 'react-router-dom'

const capitalize = (s = '') => s[0].toUpperCase() + s.substring(1, s.length)

const Products = ({ products = [] }) => {
	const renderProducts = () =>
		products.map(({ title, id, img, text }) => (
			<Card
				hoverable
				style={{ marginBottom: 40, padding: 20 }}
				title={capitalize(title)}
				key={id}
			>
				<img
					src={require(`../Assets/Images/${img}`)}
					alt="Product Image"
					style={{
						width: 300,
						display: 'block',
						margin: '10px auto 30px auto',
						borderRadius: 3
					}}
				/>
				<p>{capitalize(text)}</p>
				<Link to={`/products/${id}`}>
					<Button style={{ width: '100%' }} type="primary">
						See Product
					</Button>
				</Link>
			</Card>
		))

	return renderProducts()
}

export default Products
