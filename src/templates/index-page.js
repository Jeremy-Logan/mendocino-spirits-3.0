import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import ProductRoll from '../components/ProductRoll'
import ContactForm from '../components/ContactForm.tsx'
import FindUs from '../components/FindUs.tsx'

export const IndexPageTemplate = ({
	image,
	title,
	heading,
	subheading,
	mainpitch,
	description,
	intro,
}) => (
	<div>
		<div
			style={{
				backgroundImage: `url(${
					!!image.childImageSharp
						? image.childImageSharp.fluid.src
						: image
				})`,
				backgroundPosition: `-0px -180px`,
				backgroundAttachment: `fixed`,
				width: '100vw',
				height: '110vh',
				position: 'relative',
				left: '50%',
				right: '50%',
				margin: '0 -50vw',
				backgroundSize: 'cover',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'top',
				backgroundRepeat: 'no-repeat'
			}}>
			<div
				style={{
					display: 'flex',
					height: '40vh',
					margin: '250px 0 0 -20vw',
					padding: '2.4rem',
					width: '30vw',
					lineHeight: '1',
					justifyContent: 'space-around',
					alignItems: 'left',
					flexDirection: 'column',
					backgroundColor: '#F7E4C5',
				}}>
				<h1
					style={{
						color: '#8E5039',
						fontSize: '2rem',
						fontWeight: '500',
					}}>
					{title}
				</h1>
				<h3
					style={{
						marginTop: '-5vh',
						color: '#8E5039',
						fontSize: '1.2rem',
						fontWeight: '500',
					}}>
					{subheading}
				</h3>
			</div>
		</div>
		<ProductRoll />
		{/* <FindUs/> */}
		<ContactForm/>
	</div>
)

IndexPageTemplate.propTypes = {
	image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	title: PropTypes.string,
	heading: PropTypes.string,
	subheading: PropTypes.string,
	mainpitch: PropTypes.object,
	description: PropTypes.string,
	intro: PropTypes.shape({
		blurbs: PropTypes.array,
	}),
}

const IndexPage = ({ data }) => {
	const { frontmatter } = data.markdownRemark

	return (
		<Layout>
			<IndexPageTemplate
				image={frontmatter.image}
				title={frontmatter.title}
				heading={frontmatter.heading}
				subheading={frontmatter.subheading}
				mainpitch={frontmatter.mainpitch}
				description={frontmatter.description}
				intro={frontmatter.intro}
			/>
		</Layout>
	)
}

IndexPage.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.shape({
			frontmatter: PropTypes.object,
		}),
	}),
}

export default IndexPage

export const pageQuery = graphql`
	query IndexPageTemplate {
		markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
			frontmatter {
				title
				image {
					childImageSharp {
						fluid(maxWidth: 2048, quality: 100) {
							...GatsbyImageSharpFluid
						}
					}
				}
				heading
				subheading
				mainpitch {
					title
					description
				}
				description
				intro {
					blurbs {
						image {
							childImageSharp {
								fluid(maxWidth: 240, quality: 64) {
									...GatsbyImageSharpFluid
								}
							}
						}
						text
					}
					heading
					description
				}
			}
		}
	}
`
