import React from 'react'
import styled from 'styled-components'
import { Link, useStaticQuery, graphql } from 'gatsby'


const LogoWrap = styled.div`
    margin: auto 0;
    flex-basis: 16em;

    @media screen and (max-width: 768px) {
        flex-basis: 18em;
    }
    @media screen and (max-width: 991px) {
        flex-basis: 12em;
    }
`
const Logo = () => {
    const data = useStaticQuery(graphql`
        query {
            file(name: { eq: "logo" }) {
                publicURL
            }
        }
    `)

    return (
        <LogoWrap as={Link} to="/">
            <img src={data.file.publicURL} alt="logo" />
        </LogoWrap>
    )
}

export default Logo