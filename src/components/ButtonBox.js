import Button from "./Button";
import styled from "styled-components";

export default function ButtonBox({link, text}) {
    return (
        <ButtonBoxContainer>
            <Button link={link} text={text} />
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