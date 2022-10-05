import Footer from "./Footer";
import HeaderAction from "./HeaderAction";
import Session from "./Session";

import { useState, useEffect } from 'react';
import axios from "axios";
import styled from "styled-components";

export default function MoviePage() {
    const [movieInfo, setMovieInfo] = useState(undefined);

    useEffect(() => {
		axios
            .get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/14/showtimes`)
            .then(res => {setMovieInfo(res.data);})
            .catch(err => console.error(err));
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

            {/* <Session date="24/06/2021" showtimes={[{id: 289, name: "15:00"},{id: 290, name: "19:00"}]} weekday="Quinta-feira" />
            <Session date="25/06/2021" showtimes={[{id: 291, name: "15:00"},{id: 292, name: "19:00"}]} weekday="Sexta-feira" /> */}
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
