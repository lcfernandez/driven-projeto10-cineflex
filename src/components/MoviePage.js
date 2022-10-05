import Footer from "./Footer";
import HeaderAction from "./HeaderAction";
import Session from "./Session";

import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from "axios";
import styled from "styled-components";

export default function MoviePage() {
    const { movieId } = useParams();
    const [movieInfo, setMovieInfo] = useState(undefined);

    useEffect(() => {
		axios
            .get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieId}/showtimes`)
            .then(res => setMovieInfo(res.data))
            .catch(err => console.error(err))
    }, []);

    if (!movieInfo) {
        return "Carregando...";
    }

    return (
        <MoviePageContainer>
            <HeaderAction children={<h5>Selecione o horário</h5>} />

            {movieInfo.days.map(
                movieDay =>
                    <Session
                        date={movieDay.date}
                        key={movieDay.id}
                        showtimes={movieDay.showtimes}
                        weekday={movieDay.weekday}
                    />
            )}

            <Footer src={movieInfo.posterURL} title={movieInfo.title} />
        </MoviePageContainer>
    );
}

const MoviePageContainer = styled.div`
    margin-top: 67px;

    button {
        margin: 22px 10px 22px 0;
        width: 82px;
    }
`;
