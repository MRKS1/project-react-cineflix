import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

export default function Movies() {
    const [movieItem, setMovieItem] = useState([]);

    useEffect(() => {
        const movieGet = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies")

        movieGet.then(
            (response) => setMovieItem(response.data))
            .catch
            ((error) => console.log(error.response.data))
    }, []);


    return (
        <List>
            {movieItem.map(item => (
                <div key={item.id}>
                    <img src={item.posterURL} alt={item.title} />
                </div>
            ))}
        </List>
    )
}

const List = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    img{
        height: 210px;
        border-radius: 10px;
        margin: 15px;
    }
`
