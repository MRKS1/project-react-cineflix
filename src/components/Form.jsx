import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function Form() {
    function fillInfo() {
        alert("funcionou")
    }

  return (
    <Info onSubmit={fillInfo}>
        <label htmlFor="name">Nome do comprador(a)</label>
        <input type="name" placeholder="Digite seu nome..."/>
        <label htmlFor="number">CPF do comprador(a)</label>
        <input type="text" maxLength="14" placeholder="CPF do comprador(a)"/>
        <Button to="/checkout" type="submit">Reservar assento(s)</Button>
    </Info>
  )
}

const Info = styled.form`
    font-family: "Sarala", serif;
    font-size: 18px;
    color: white;
    display: flex;
    flex-direction: column;
    margin: 30px;
    input {
        height: 45px;
        border-radius: 8px;
        margin-top: 8px;
        margin-bottom: 20px;
        padding-left: 10px;

    }
    input::placeholder {
        font-style: italic;
        font-size: 16px;

    }
`

const Button = styled(Link)`
        height: 50px;
        font-size: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: black;
        text-decoration: none;
        border: none;
        font-weight: 700;
        background-color: #EE897F;
        border-radius: 8px;
        margin-top: 15px;

    `
