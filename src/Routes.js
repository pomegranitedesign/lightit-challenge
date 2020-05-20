import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Main, Product } from './Pages'

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/" component={Main} />
			<Route path="/products/:productID" component={Product} />
		</Switch>
	)
}

export default Routes
