import React from 'react'
import { Flex, Box, List, ListItem } from '@chakra-ui/core'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'

const About = ({ data }) => {
	const { image } = data.imageSharp.fluid

	return (
		<div style={{ marginTop: '10vh', minH: '70vh' }}>
				<Flex flex='space-between' justifyContent='center' alignItems='center'>
					<Box backgroundColor='#E7E4BB' minH='70vh' w='60vw'>
                    <Flex flex='space-between' justifyContent='center' alignItems='center'>
                    <Box p='5rem' minW='50%' >
                    <Img fluid={data.imageSharp.fluid}/></Box>
                    <Box w='50%'>
						<Flex  justifyContent='center' m='2rem' flexDirection='column' >
							<Box fontSize='2rem' w='100%' m='2rem' >
								<h2>About Us</h2>
							</Box>
							
								<Box p='2rem'>
								<p>Mendocino Spirits is the creation of Crispin Cain and his team. Crispin brings 30 years of distillation and cellaring experience to each glass. 
As Crispin tells it, “While I worked for Germain-Robin Brandy, I had a vision of making fine whiskey here in Northern California, one which expresses the simple beauty of clean air, clean water, and tall trees, while capturing the complexity of malted grains from a variety of local and classic sources.”
“I create whiskies using the time honored traditions of Cognac, keen attention to fermentation, the Charentais Pot Still, the double distillation method, brought to barreling strength with filtered rain water, choosing fine barrels to match fine spirits. Carefully selecting the distillate which becomes Mendocino Spirits.
Crispin’s accomplishments can be found in each bottle of Mendocino Spirits, his Bourbon is a continuing source of accolades and pride.</p>	
                                    
                                </Box>
							
						</Flex>
                        </Box>
                        </Flex>
					</Box>
				</Flex>
		</div>
	)
}

export default () => {
	return (
		<StaticQuery
			query={graphql`
				query AboutData {
					imageSharp(
						original: {
							src: {
								eq: "/static/crispin-cain-3c554f055eb513a2d1b83212608fcc40.jpg"
							}
						}
					) {
						fluid(maxWidth: 680, quality: 100) {
							...GatsbyImageSharpFluid_withWebp
						}
					}
				}
			`}
			render={(data, count) => <About data={data} count={count} />}
		/>
	)
}
