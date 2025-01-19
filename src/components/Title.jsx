import React from 'react'
import styled from 'styled-components'

export default function Title() {
    return (
        <>
            <TitleBox>Em Cartaz</TitleBox>
        </>
    )
}

const TitleBox = styled.h1`
    height: 78px;
    color: white;
    font-family: "Sarala", serif;
    font-size: 24px;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
`
