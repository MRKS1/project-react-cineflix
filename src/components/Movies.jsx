import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

export default function Movies({ setMovie }) {
    const [movieItem, setMovieItem] = useState([]);

    useEffect(() => {
        const movieGet = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies")

        movieGet.then(
            (response) => setMovieItem(response.data))
            .catch
            ((error) => console.log(error.response.data))
    }, []);


    function selection(props) {
        setMovie([props])
    };


    return (
        <>
            <TitleBox>Em Cartaz</TitleBox>
            <List>
                {movieItem.map(item => (
                    <Link
                        to={`/sessoes/${item.id}`}
                        onClick={() => selection(item.title)}
                        key={item.id}>
                        <img src={item.posterURL} alt={item.title} />
                    </Link>
                ))}
            </List>
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