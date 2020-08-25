import React, { useState } from 'react'
import styled from 'styled-components'
import NavbarLinks from './NavbarLinks'
import Logo from './Logo'
import { Link } from 'gatsby'

const NavLogo = styled(Link)`
    @media (max-width: 991px) {
        display: flex;
    }
    @media (max-width: 768px) {
        flex-basis: 18em;
    }
`
const Navigation = styled.nav`
    height: 15vh;
    display: flex;
    background-color: #552818;
    justify-content: center;
    margin: 0 auto;
    padding: 0 5vw;
    z-index: 2;
    align-self: center;

    @media (max-width: 768px) {
        position: sticky;
        height: 9vh;
        top: 0;
        left: 0;
        right: 0;
        left: 0;
    }
`
const Toggle = styled.div`
    display: none;
    height: 100%;
    cursor: pointer;
    padding: 0 0 0 16vw;

    @media (max-width: 768px) {
        display: flex;
    }
`

const Navbox = styled.div`
    display: flex;
    height: 100%;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        position: fixed;
        width: 100%;
        justify-content: space-between;
        padding-top: 10vh;
        background-color: #fff;
        transition: all 0.3s ease-in;
        top: 12vh;
        left: ${(props) => (props.open ? '-100%' : '0')};
    }
`

const Hamburger = styled.div`
    background-color: #f7e4c5;
    width: 25px;
    height: 3px;
    transition: all 0.3s linear;
    align-self: center;
    position: relative;
    transform: ${(props) => (props.open ? 'rotate(-45deg)' : 'inherit')};

    ::before,
    ::after {
        width: 25px;
        height: 3px;
        background-color: #f7e4c5;
        content: '';
        position: absolute;
        transition: all 0.3s linear;
    }

    ::before {
        transform: ${(props) =>
            props.open
                ? 'rotate(-90deg) translate(-10px, 0px)'
                : 'rotate(0deg)'};
        top: -10px;
    }

    ::after {
        opacity: ${(props) => (props.open ? '0' : '1')};
        transform: ${(props) =>
            props.open ? 'rotate(90deg) ' : 'rotate(0deg)'};
        top: 10px;
    }
`
const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)

    return (
        <Navigation>
            <NavLogo to="/">
                <Logo />
            </NavLogo>
            <Toggle
                navbarOpen={navbarOpen}
                onClick={() => setNavbarOpen(!navbarOpen)}
            >
                {navbarOpen ? <Hamburger open /> : <Hamburger />}
            </Toggle>
            {navbarOpen ? (
                <Navbox>
                    <NavbarLinks />
                </Navbox>
            ) : (
                <Navbox open>
                    <NavbarLinks />
                </Navbox>
            )}
        </Navigation>
    )
}

export default Navbar
