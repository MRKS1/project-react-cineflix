import React from 'react'
import Logo from '../assets/logo_cineflix.png'
import styled from 'styled-components'

export default function Header() {
  return (
    <TitleBox>
        <img src={Logo} alt="Logo" />
        <h1>Cineflex</h1>
    </TitleBox>
  )
}

const TitleBox = styled.div`
    height: 67px;
    width: 100vw;
    background-color: #EE897F;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        height: 40px;
        margin: 15px;
    }
    h1 {
        font-family: "Raleway", serif;
        font-size: 36px;
        font-weight: 600;
        color: #FADBC5;
    }
`
