import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

export default function Showtimes() {
    const [timeItem, setTimeItem] = useState([]);

    useEffect(() => {
        const movieGet = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies/[COLOCAR ID DO FILME]/showtimes")

        movieGet.then(
            (response) => setTimeItem(response.data.days))
            .catch
            ((error) => console.log(error.response.data.days))
    }, []);

    return (
        <>
            <TitleBox>Selecione o horário</TitleBox>
            <List>
                {timeItem.map(item => (
                    <Time key={item.id}>
                        <Day>
                            <h2>{item.weekday}, {item.date}</h2>
                        </Day>
                        <Hour>
                            {item.showtimes.map(season => (
                                <div key={season.id}>
                                    <p>{season.name}</p>
                                </div>
                            ))}

                        </Hour>
                    </Time>
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
`

const Time = styled.div`
    min-height: 149px;
    width: 338px;
    color: white;
    font-family: "Sarala", serif;
    border-radius: 9px;
    font-size: 20px;
    font-weight: 400;
    background-color: #2B2D36;
    margin: 15px;
`

const Day = styled.div`
    border-bottom: 1px solid;
    border-color: #4E5A65;
    margin: 20px;


    h2 {
        margin-bottom: 20px;
    }
`

const Hour = styled.div`
    display: flex;

    div {
        height: 40px;
        width: 84px;
        color: #EE897F;

        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid;
        border-radius: 4px;
        border-color: #EE897F;
        margin-left: 25px;
        margin-bottom: 15px;

    }


`
