import HeaderAction from "./HeaderAction";
import Poster from "./Poster";

import { useState, useEffect } from 'react';
import axios from "axios";
import styled from "styled-components";

const URL = "https://mock-api.driven.com.br/api/v5/cineflex/";

export default function ChooseMoviePage() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
		axios
            .get(`${URL}/movies`)
            .then(res => {setMovies(res.data);})
            .catch(err => console.error(err));
    }, []);

    return (
        <ChooseMoviePageContainer>
            <HeaderAction children={<h5>Selecione o filme</h5>} />

            <Posters>
                {movies.map(
                    movie => <Poster key={movie.id} src={movie.posterURL} title={movie.title}/>
                )}
            </Posters>
        </ChooseMoviePageContainer>
    );
}

const ChooseMoviePageContainer = styled.div`
    margin-top: 67px;
`;

const Posters = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    img {
        margin: 0 15px 20px 15px;
        width: 129px;
    }
`;
