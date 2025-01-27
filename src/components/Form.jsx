import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function Form({ setName, setCpf, selection, ids }) {
    const [nameData, setNameData] = useState("");
    const [cpfData, setCpfData] = useState("");
    let seats = selection;
    const body = {
        ids: ids,
        name: nameData,
        cpf: cpfData
    };

    function fillInfo() {
        setName(nameData);
        setCpf(cpfData);
        axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", body)
            .then(res => console.log(res.data)
            )
            .catch(err => console.log(err.response.data)
            )
    };

    function warning() {
        alert("Insira os dados corretamente. Selecione o(s) assento(s) e insira seu Nome e CPF (11 dígitos).")
    };


    return (
        <Info>
            <label htmlFor="name">Nome do comprador(a)</label>
            <input
                required
                id="name"
                type="name"
                placeholder="Digite seu nome..."
                value={nameData}
                onChange={e => setNameData(e.target.value)} />
            <label htmlFor="cpf">CPF do comprador(a)</label>
            <input
                required
                id="cpf"
                type="text"
                maxLength="11"
                minLength="11"
                placeholder="CPF do comprador(a)"
                value={cpfData}
                onChange={e => setCpfData(e.target.value)} />
            <Button
                to={(seats == "") || (cpfData.length < 11 || (nameData == "")) ? "" : "/sucesso"}
                type="submit"
                onClick={(seats == "") || (cpfData.length < 11 || (nameData == "")) ? warning : fillInfo}>
                Reservar assento(s)</Button>
        </Info>
    )
};

const Info = styled.form`
    font-family: "Sarala", serif;
    font-size: 18px;
    color: white;
    display: flex;
    flex-direction: column;
    margin: 30px;
    input {
        font-size: 18px;
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