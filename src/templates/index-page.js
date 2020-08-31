import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import { Flex, Box, Heading } from '@chakra-ui/core'
import Img from 'gatsby-image'

import ProductRoll from '../components/ProductRoll'
import About from '../components/About.tsx'
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
	<>
		<div style={{ height: '100%' }}>
			<Flex
				backgroundImage={`url(${image.childImageSharp.fluid.src})`}
				backgroundPosition={['-40vw 10%', '-500px -180px', '-40vw -180px', '0vw -180px']}
				backgroundAttachment='fixed'
				width='100vw'
				height='110vh'
				position='relative'
				left='50%'
				right='50%'
				margin='0 -50vw'
				backgroundSize={['140%','cover']}
				display='flex'
				justifyContent='center'
				alignItems='center'
				backgroundRepeat='no-repeat'>
				<Box
					display='flex'
					height='auto'
					margin={[
						'85% 0 0 0',
						'-20vh 0 0 -30vw',
						'-20vh 0 0 -40vw',
						'-20vh 0 0 -20vw',
					]}
					padding={['1.5rem 2rem', '2.4rem']}
					width={['100vw','60vw', '50vw', '30vw']}
					lineHeight='1'
					justifyContent='space-around'
					alignItems='left'
					flexDirection='column'
					backgroundColor='#F7E4C5'>
					<Heading
						as='h1'
						m='0'
						p='0'
						color='#8E5039'
						fontSize={['1.5rem', '1.5rem','2rem']}
						fontWeight='500'>
						{title}
					</Heading>
					<Heading
						as='h3'
							color= '#8E5039'
							fontSize= {['1rem','1.2rem']}
							fontWeight= '500'
							mt='1rem'
						>
						{subheading}
					</Heading>
				</Box>
			</Flex>

			<ProductRoll />
			<About />

			<FindUs />

			<ContactForm />
		</div>
	</>
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
