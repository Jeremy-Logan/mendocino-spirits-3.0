import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Grid, Box, Flex, Heading, Text, Icon } from '@chakra-ui/core'
import WheatYellow from '../../static/img/wheat-yellow.svg'




const ProductRoll = ({ data }) => {
	// const { markdownRemark } = data
	// const { title, image } = markdownRemark.frontmatter
	const { edges: posts } = data.allMarkdownRemark

	const Wheat = ({post}) => (
		<Flex
						key={post.id}
						alignItems='center'
						justifyContent='center'
						pos='relative'
						mt='5rem'
						overflow='hidden'>
						<Box
							w={1 / 16}
							align='right'
							minW={['40vw', '20vw', '10vw']}
							mr='-1vw'
							zIndex={2}>
							<Img
								h='auto'
								fluid={
									post.frontmatter.featuredimage
										.childImageSharp.fluid
								}
								alt={`${post.frontmatter.title}`}
							/>
						</Box>
						<Box
							w={1 / 2}
							pos='relative'
							backgroundColor='#e7e4bb'
							p={['10', '20']}
							pr={['10vw', '20vw']}
							pl={['10vw', '10vw']}
							fontSize={['sm', 'md', 'lg']}
							ml='-5vw'>
							<Heading
								as='h2'
								fontWeight='700'
								fontSize={['1rem', '1.5rem', '2rem']}>
								{post.frontmatter.title}
							</Heading>
							<Text
								as='p'
								fontSize={['0.75rem', '1rem', '1.2rem']}>
								{post.frontmatter.description}
							</Text>
						</Box>
						<Box
							position='absolute'
							right={1}
							w={1/2}
							height='80vh'
							maxWidth='60vw'
							zIndex={2}
							marginRight='-8vw'
							overflow='hidden'
							>
							<img src={WheatYellow} />
						</Box>
					</Flex>
	)

	const Storm = ({post}) => (
		<Flex
						key={post.id}
						alignItems='center'
						justifyContent='center'
						pos='relative'
						mt='5rem'
						overflow='hidden'>
						<Box
							w={1 / 16}
							align='right'
							minW={['40vw', '20vw', '10vw']}
							mr='-1vw'
							zIndex={2}>
							<Img
								h='auto'
								fluid={
									post.frontmatter.featuredimage
										.childImageSharp.fluid
								}
								alt={`${post.frontmatter.title}`}
							/>
						</Box>
						<Box
							w={1 / 2}
							pos='relative'
							backgroundColor='#8B8B8B'
							p={['10', '20']}
							pr={['10vw', '20vw']}
							pl={['10vw', '10vw']}
							fontSize={['sm', 'md', 'lg']}
							ml='-5vw'>
							<Heading
								as='h2'
								fontWeight='700'
								fontSize={['1rem', '1.5rem', '2rem']}>
								{post.frontmatter.title}
							</Heading>
							<Text
								as='p'
								fontSize={['0.75rem', '1rem', '1.2rem']}>
								{post.frontmatter.description}
							</Text>
						</Box>
						<Box
							position='absolute'
							right={1}
							w={1/2}
							height='80vh'
							maxWidth='60vw'
							zIndex={2}
							marginRight='-8vw'
							overflow='hidden'
							>
							<img src={WheatYellow} />
						</Box>
					</Flex>
	)

	return (
		<div>
			{posts &&
				posts.map(({ node: post }) => ((post.frontmatter.colorscheme === 'wheat') ?
					
					<Wheat post={post}/>
					
					:
					
					<Storm post={post}/>
					
					)
					
)}
		</div>
	)
}

ProductRoll.propTypes = {
	data: PropTypes.shape({
		allMarkdownRemark: PropTypes.shape({
			edges: PropTypes.array,
		}),
	}),
}

export default () => (
	<StaticQuery
		query={graphql`
			query productData {
				markdownRemark {
					id
				}
				allMarkdownRemark(
					filter: {
						frontmatter: { templateKey: { eq: "product-post" } }
					}
					sort: { fields: frontmatter___sortnumber, order: ASC }
				) {
					edges {
						node {
							frontmatter {
								title
								templateKey
								description
								path
								sortnumber
								colorscheme
								featuredimage {
									childImageSharp {
										fluid(maxWidth: 800, quality: 100) {
											...GatsbyImageSharpFluid
										}
									}
								}
							}
						}
					}
				}
			}
		`}
		render={(data, count) => <ProductRoll data={data} count={count} />}
	/>
)
