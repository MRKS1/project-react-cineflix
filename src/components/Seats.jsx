import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Form from './Form';
import { useParams } from 'react-router-dom';

export default function Seats({ setSeats, setName, setCpf }) {
    const { idSeats } = useParams();
    const [seatsItem, setSeatsItem] = useState([]);
    const [selection, setSelection] = useState([]);
    const [ids, setIds] = useState([]);


    useEffect(() => {
        const movieGet = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSeats}/seats`)

        movieGet.then(
            (response) => setSeatsItem(response.data.seats))
            .catch
            ((error) => console.log(error.response.data))
         }, []);


    function selectSeats(choice, isAvailable, id) {
        if (isAvailable === false) {
            alert("Esse assento não está disponível")
        }
        else {
            if (selection.includes(choice)) {
                setSelection(selection.filter(i => i !== choice));
                setSeats(selection.filter(i => i !== choice));
                setIds(ids.filter(i => i !== id));

            }
            else {
                setSelection([...selection, choice]);
                setSeats([...selection, choice]);
                setIds([...ids, id]);
            }
        }
    };

    return (
        <>
            <TitleBox>Selecione o(s) assento(s)</TitleBox>
            <Menu>
                <Numbers>
                    {seatsItem.map(item => (
                        <Number
                            className={item.isAvailable ? "" : "notavailble"}
                            $color={selection.includes(item.name) ? "#FADBC5" : "#9DB899"}
                            $border={selection.includes(item.name) ? "#EE897F" : "#9DB899"}
                            onClick={() => selectSeats(item.name, item.isAvailable, item.id)}
                            key={item.id}>
                            <p>{item.name}</p>
                        </Number>
                    ))}
                </Numbers>
                <Form setName={setName} setCpf={setCpf} selection={selection} ids={ids} />
            </Menu>
        </>
    )
};

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

const Menu = styled.div`
    margin: 15px;
`

const Number = styled.div`
    height: 28px;
    width: 28px;
    font-family: "Sarala", serif;
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
    margin-bottom: 15px;
    background-color: ${props => props.$color};
    border: 2px solid;
    border-radius: 30px;
    border-color: ${props => props.$border};
    &:hover {
        cursor: pointer;
    }
    &.notavailble {
        background-color: #2B2D36;
        border-color: #2B2D36;
        color: #2B2D36;
    }
`

const Numbers = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding-bottom: 35px;
    border-bottom: 1px solid;
    border-color: #4E5A65;

`