import { Link } from "react-router-dom";
import styled from "styled-components";

export default function ButtonSmall({ dataIdentifier, link, onClick, text }) {
    return (
        <Link to={link}>
            <ButtonSmallContainer data-identifier={dataIdentifier} onClick={onClick}>
                {text}
            </ButtonSmallContainer>
        </Link>
    );
}

const ButtonSmallContainer = styled.button`
    background-color: #E8833A;
    border: none;
    border-radius: 3px;
    color: #FFFFFF;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    height: 43px;
    letter-spacing: 0.02em;
    line-height: 21px;
`;
