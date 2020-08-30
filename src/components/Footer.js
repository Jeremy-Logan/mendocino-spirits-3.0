import React from 'react'
import { Link } from 'gatsby'
import { Flex, Box, List, ListItem } from '@chakra-ui/core'
import {
	FaTwitterSquare,
	FaFacebookSquare,
	FaInstagramSquare,
} from 'react-icons/fa'

const Footer = () => {
	return (
		<Flex backgroundColor='#552818' h='20vh'>
			<Flex w={1 / 2} justifyItems='flex-start' p='2rem'>
				<Box flexDirection='column' pl='5rem'>
					<List color='#F7E4C5'>
						<ListItem>
							<Link to='/'>Home</Link>
						</ListItem>
						<ListItem>
							<Link to='/about'>Products</Link>
						</ListItem>
						<ListItem>
							<Link to='/products'>About</Link>
						</ListItem>
						<ListItem>
							<Link to='/contact/examples'>Find Us</Link>
						</ListItem>
						<ListItem>
							<Link to='/'>Contact</Link>
						</ListItem>
					</List>
				</Box>
			</Flex>
			<Flex
				w={1 / 2}
				flexDirection='row'
				alignItems='center'
				justifyItems='space-between'
				justify='flex-end'>
				<Box p={2}>
					<a title='facebook' href='https://facebook.com'>
						<Box
							m='0.5rem'
							as={FaFacebookSquare}
							alt='Facebook'
							size='1.5rem'
							color='#F7E4C5'
						/>
					</a>
					<Box
						m='0.5rem'
						as={FaTwitterSquare}
						alt='Twitter'
						size='1.5rem'
						color='#F7E4C5'>
						<a title='twitter' href='https://twitter.com' />{' '}
					</Box>
					<a title='instagram' href='https://instagram.com'>
						<Box
							m='0.5rem'
							as={FaInstagramSquare}
							alt='Instagram'
							size='1.5rem'
							color='#F7E4C5'
						/>
					</a>
				</Box>
			</Flex>
		</Flex>
	)
}

export default Footer
