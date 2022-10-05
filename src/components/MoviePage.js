import Footer from "./Footer";
import HeaderAction from "./HeaderAction";
import Session from "./Session";

import styled from "styled-components";

export default function MoviePage() {
    return (
        <MoviePageContainer>
            <HeaderAction action={"Selecione o horário"} />
            <Session date="24/06/2021" showtimes={[{id: 289, name: "15:00"},{id: 290, name: "19:00"}]} weekday="Quinta-feira" />
            <Session date="25/06/2021" showtimes={[{id: 291, name: "15:00"},{id: 292, name: "19:00"}]} weekday="Sexta-feira" />
            <Footer src={"https://image.tmdb.org/t/p/w500/riYInlsq2kf1AWoGm80JQW5dLKp.jpg"} title={"Enola Holmes"} />
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
