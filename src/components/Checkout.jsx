import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function Chekout() {
    function fillInfo() {
        alert("funcionou")
    }

    return (
        <>
            <TitleBox>Pedido finalizado!</TitleBox>
            <Submit onSubmit={fillInfo}>
            <Info>
                <div>
                    <h2>Filme e sessão</h2>
                    <p>Filme</p>
                    <p>horario</p>
                </div>
                <div>
                    <h2>Ingressos</h2>
                    <p>Assento 15</p>
                </div>
                <div>
                    <h2>Comprador(a)</h2>
                    <p>Nome</p>
                    <p>CPF</p>
                </div>

            </Info>
            <FinalButton to="/" type="submit">Reservar assento(s)</FinalButton>
            </Submit>

        </>
    )
}

const TitleBox = styled.h1`
height: 78px;
color: #9DB899;
font-family: "Sarala", serif;
font-size: 24px;
font-weight: 400;
display: flex;
justify-content: center;
align-items: center;
`

const Submit = styled.form`
    font-family: "Sarala", serif;
   display: flex;
   flex-direction: column;
   margin: 20px;
`

const FinalButton = styled(Link)`
    height: 50px;
    border: none;
    color: black;
    font-size: 18px;
    font-weight: 700;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #EE897F;
    border-radius: 8px;
    margin-top: 20px;
`   


const Info = styled.div`
min-height: 420px;
font-family: "Sarala", serif;
font-size: 20px;
background-color: #2B2D36;
color: white;
padding: 18px;
border-radius: 8px;

h2 {
    font-size: 22px;
    font-weight: 700;
    color: #EE897F;
    padding-bottom: 15px;
    margin-bottom: 15px;
    margin-top: 30px;
    border-bottom: 1px solid;
    border-color: #4E5A65;

}

p {
    margin-bottom: 15px;
}

`


