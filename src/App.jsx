import React from 'react'
import Header from './components/Header';
import Movies from './components/Movies';
import styled from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Showtimes from './components/Showtimes';
import Seats from './components/Seats';
import Checkout from './components/Checkout';

export default function App() {
  return (
    <BrowserRouter>
    <Container>
      <Header />

      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/showtimes/" element={<Showtimes />} />
        <Route path="/seats" element={<Seats />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      </Container>
    </BrowserRouter>
  )
}

const Container = styled.div`
    min-height: 100vh;
    background-color: #212226;
`;