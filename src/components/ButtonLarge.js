import styled from "styled-components";

export default function ButtonLarge({ dataIdentifier, onClick, text, type }) {
    return (
        <ButtonLargeContainer>
            <button data-identifier={dataIdentifier} onClick={onClick} type={type}>
                {text}
            </button>
        </ButtonLargeContainer>
    );
}

const ButtonLargeContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;

    button {
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
        margin: 46px 0;
        width: 225px;
    }
`;
