import React from 'react'

import Layout from '../../components/Layout'
import ProductRoll from '../../components/ProductRoll'

export default class ProductIndexPage extends React.Component {
	render() {
		return (
			<Layout>
				<section >
					<div >
						<div >
							<ProductRoll />
						</div>
					</div>
				</section>
			</Layout>
		)
	}
}
