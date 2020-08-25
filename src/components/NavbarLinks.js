import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Logo from './Logo'

const NavItem = styled(Link)`
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
        color: #8e5039;
    }
`
const MenuLogo = styled(Link)`
    @media (max-width: 768px) {
        display: none;
    }
`

const NavbarLinks = () => {
    return (
        <>
            <NavItem to="/"> Products </NavItem>
            <NavItem to="/"> About </NavItem>
            <MenuLogo to="/" style={{ minWidth: 300 }}>
                <Logo />
            </MenuLogo>
            <NavItem to="/"> Find Us </NavItem>
            <NavItem to="/"> Contact </NavItem>
        </>
    )
}

export default NavbarLinks
