import HeaderAction from "./HeaderAction";
import Poster from "./Poster";

import { useEffect, useState } from 'react';
import axios from "axios";
import styled from "styled-components";

export default function ChooseMoviePage() {
    const [movies, setMovies] = useState(undefined);

    useEffect(() => {
		axios
            .get("https://mock-api.driven.com.br/api/v5/cineflex/movies")
            .then(res => {setMovies(res.data);})
            .catch(err => console.error(err.response.data));
    }, []);

    if (!movies) {
        return (
            <ChooseMoviePageContainer>
                Carregando...
            </ChooseMoviePageContainer>
        );
    }

    return (
        <ChooseMoviePageContainer>
            <HeaderAction children={<h5>Selecione o filme</h5>} />

            <Posters>
                {movies.map(
                    movie =>
                        <Poster
                            dataIdentifier="movie-outdoor"
                            id={movie.id}
                            key={movie.id}
                            src={movie.posterURL}
                            title={movie.title}
                        />
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
