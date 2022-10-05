import HeaderAction from "./HeaderAction";
import Poster from "./Poster";

import { useState, useEffect } from 'react';
import axios from "axios";
import styled from "styled-components";

const URL = "https://mock-api.driven.com.br/api/v5/cineflex/";

export default function ChooseMovie() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
		const promise = axios.get(`${URL}/movies`);

		promise.then(res => {
			setMovies(res.data);
		});

        promise.catch(err => console.error(err));
	}, []);

    return (
        <ChooseMovieContainer>
            <HeaderAction action={"Selecione o filme"} />
            <Posters>
                {movies.map(movie => <Poster alt="" key={movie.id} src={movie.posterURL} title={movie.title}/>)}
            </Posters>
        </ChooseMovieContainer>
    );
}

const ChooseMovieContainer = styled.div`
    margin-top: 67px;
`;

const Posters = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;
