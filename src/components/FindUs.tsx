import React from 'react'
import { Flex, Box, List, ListItem, Text } from '@chakra-ui/core'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'

const FindUs = ({ data }) => {
	const { image } = data.imageSharp.fluid

	return (
		<div style={{ marginTop: '5vh', minH: '70vh' }} id='findUs'>
			<BackgroundImage
				fluid={data.imageSharp.fluid}
				backgroundColor='#420D06'
				minW='100vw'
				minH='90vh'
				zIndex='-2'>
				<Flex flex={['center', 'flex-end']} justifyItems={['center', 'right']} alignItems='center'>
					<Box w={['100vw', '55vw']}></Box>
					<Box backgroundColor='#8E5039' minH='70vh' w={['100vw', '30vw']}>
						<Flex flexDirection='column' justifyContent='center' m='2rem' color='#F7E4C5' >
							<Box fontSize='2rem'  >
								<Text as='h2' ml='2rem' fontSize={['1.5rem', '2rem']}>Find our spirits at these locations:</Text>
							</Box>
							<Flex FlexDirection='column' justifyContent='center' m='1.5rem'>
								<Box>
									<List m='2rem'>
										<ListItem fontSize='1.3rem'><h3 style={{textDecoration: 'underline'}}>California</h3></ListItem>
										<ListItem fontSize='1.2rem' pt='1rem'><p>The Store<br/>555 E. Main St.<br/>Townsville, CA  12345</p></ListItem>
                                        <ListItem fontSize='1.2rem' pt='1rem'><p>The Store<br/>555 E. Main St.<br/>Townsville, CA  12345</p></ListItem>
                                        <ListItem fontSize='1.2rem' pt='1rem'><p>The Store<br/>555 E. Main St.<br/>Townsville, CA  12345</p></ListItem>
                                        <ListItem fontSize='1.2rem' pt='1rem'><p>The Store<br/>555 E. Main St.<br/>Townsville, CA  12345</p></ListItem>
									</List>
								</Box>
								<Box>
                                <List m='2rem'>
										<ListItem fontSize='1.3rem'><h3 style={{textDecoration: 'underline'}}>Elsewhere</h3></ListItem>
										<ListItem fontSize='1.2rem' pt='1rem'><p>The Store<br/>555 E. Main St.<br/>Townsville, CA  12345</p></ListItem>
                                        <ListItem fontSize='1.2rem' pt='1rem'><p>The Store<br/>555 E. Main St.<br/>Townsville, CA  12345</p></ListItem>
                                        <ListItem fontSize='1.2rem' pt='1rem'><p>The Store<br/>555 E. Main St.<br/>Townsville, CA  12345</p></ListItem>
                                        <ListItem fontSize='1.2rem' pt='1rem'><p>The Store<br/>555 E. Main St.<br/>Townsville, CA  12345</p></ListItem>
									</List>
                                </Box>
							</Flex>
						</Flex>
					</Box>
				</Flex>
			</BackgroundImage>
		</div>
	)
}

export default () => {
	return (
		<StaticQuery
			query={graphql`
				query findUsData {
					imageSharp(
						original: {
							src: {
								eq: "/static/map-a6618c71c9e6e677529f6d826dffc707.jpg"
							}
						}
					) {
						fluid(maxWidth: 2048, quality: 100) {
							...GatsbyImageSharpFluid_withWebp
						}
					}
				}
			`}
			render={(data, count) => <FindUs data={data} count={count} />}
		/>
	)
}
