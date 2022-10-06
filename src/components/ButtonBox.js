import Button from "./Button";
import styled from "styled-components";

export default function ButtonBox({ dataIdentifier, link, onClick, text }) {
    return (
        <ButtonBoxContainer>
            <Button dataIdentifier={dataIdentifier} link={link} onClick={onClick} text={text} />
        </ButtonBoxContainer>
    );
}

const ButtonBoxContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;

    button {
        width: 225px;
    }
`;
