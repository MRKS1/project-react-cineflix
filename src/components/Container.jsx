import React from 'react'
import styled from 'styled-components'
import Header from './Header';
import Content from './Content';


export default function Container() {
  return (
    <Movies>
        <Header />
        <Content />
    </Movies>
  )
}

const Movies = styled.div`
    height: 100vh;
    background-color: #212226;
`;