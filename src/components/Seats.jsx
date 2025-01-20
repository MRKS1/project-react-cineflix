import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

export default function Seats() {
    const [seatsItem, setSeatsItem] = useState([]);

    useEffect(() => {
        const movieGet = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/showtimes/1/seats")

        movieGet.then(
            (response) => setSeatsItem(response.data.seats))
            .catch
            ((error) => console.log(error.response.data))
    }, []);



    
  return (
    <>
        <TitleBox>Selecione o(s) assento(s)</TitleBox>
        <List>
            {seatsItem.map(item => (
                <Choice key={item.id}>
                    <p>{item.name}</p>
                </Choice>
            ))}
        </List>
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

const List = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: 15px;
`

const Choice = styled.h1`
    height: 30px;
    width: 30px;
    font-family: "Sarala", serif;
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
    margin-bottom: 20px;
    background-color: #9DB899;
    border: 1px solid;
    border-radius: 15px;
    

`

