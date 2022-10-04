import styled from "styled-components";

export default function ChooseMovie() {
    return (
        <ChooseMovieContainer>
            <Action>
                <h3>Selecione o filme</h3>
            </Action>
        </ChooseMovieContainer>
    );
}

const Action = styled.div`
    display: flex;
    height: 110px;
`;

const ChooseMovieContainer = styled.div`
    margin-top: 67px;
`;
