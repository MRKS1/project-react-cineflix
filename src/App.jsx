import React, { useState } from 'react'
import Header from './components/Header';
import Movies from './components/Movies';
import styled from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Showtimes from './components/Showtimes';
import Seats from './components/Seats';
import Checkout from './components/Checkout';


export default function App() {
  const [movie, setMovie] = useState("");
  const [season, setSeason] = useState("");
  const [date, setDate] = useState("");
  const [seats, setSeats] = useState("");
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");

  return (
    <BrowserRouter>
      <Container>
        <Header />

        <Routes>
          <Route path="/" element={<Movies
            movie={movie}
            setMovie={setMovie}
          />} />
          <Route path="/sessoes/:idMovie" element={<Showtimes setDate={setDate} setSeason={setSeason} />} />
          <Route path="/assentos/:idSeats" element={<Seats setName={setName} setCpf={setCpf} setSeats={setSeats} />} />
          <Route path="/sucesso" element={
            <Checkout
              movie={movie}
              seats={seats}
              season={season}
              date={date}
              name={name}
              cpf={cpf}
            />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

const Container = styled.div`
    min-height: 100vh;
    background-color: #212226;
`;