import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components'
import Logo from './Logo'
import { Text } from "@chakra-ui/core";

const NavItem = styled(GatsbyLink)`
    margin: 2vw;
    transition: all 200ms ease-in;
    position: relative;
    align-items: center;
    text-align: center;
    justify-content: inherit;
    
    
    

    :after {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        width: 0%;
        content: '.';
        color: transparent;
        background: goldenrod;
        height: 1px;
        transition: all 0.4s ease-in;
    }

    :hover {
        color: goldenrod;
        ::after {
            width: 100%;
        }
    }

    @media (max-width: 768px) {
        padding: 5px 0;
        font-size: 1.2rem;
        z-index: 6;

    }
`
const MenuLogo = styled(GatsbyLink)`
	@media (max-width: 768px) {
		display: none;
	}
`

const NavbarLinks = () => {
	return (
		<>
				<Text color={['#552818', '#552818', '#F7E4C5']} fontSize='lg' letterSpacing='wide'><NavItem to='/'style={{}}>Products </NavItem></Text>
				<Text color={['#552818', '#552818', '#F7E4C5']} fontSize='lg' letterSpacing='wide'><NavItem to='/'style={{}}>About </NavItem></Text>
				<MenuLogo to='/' style={{ minWidth: 300 }}>
					<Logo />
				</MenuLogo>
				<Text color={['#552818', '#552818', '#F7E4C5']} fontSize='lg' letterSpacing='wide'><NavItem to='/'style={{}}>Find Us </NavItem></Text>
				<Text color={['#552818', '#552818', '#F7E4C5']} fontSize='lg' letterSpacing='wide'><NavItem to='/'style={{}}>Contact </NavItem></Text>
		</>
	)
}

export default NavbarLinks
