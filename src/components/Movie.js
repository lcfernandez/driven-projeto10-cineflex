import Footer from "./Footer";
import HeaderAction from "./HeaderAction";

import styled from "styled-components";

export default function Movie() {
    return (
        <MovieContainer>
            <HeaderAction action={"Selecione o horário"} />
            <h6>Quinta-feira - 24/06/2021</h6>

            <h6>Sexta-feira - 25/06/2021</h6>
            <Footer />
        </MovieContainer>
    );
}

const MovieContainer = styled.div`
    margin-top: 67px;
`;
