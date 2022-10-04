import HeaderAction from "./HeaderAction";

/* import axios from "axios"; */
import styled from "styled-components";

/* const URL = "https://mock-api.driven.com.br/api/v5/cineflex/"; */

export default function ChooseMovie() {
/*     function renderMovies() {
        const promise = axios.get(URL + "movies");
        promise.then(res => console.log(res));
        promise.catch(err => console.error(err));
    } */

    return (
        <ChooseMovieContainer>
            <HeaderAction action={"Selecione o filme"} />
            {/* {renderMovies()} */}
        </ChooseMovieContainer>
    );
}

const ChooseMovieContainer = styled.div`
    margin-top: 67px;
`;
