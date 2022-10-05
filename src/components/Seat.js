import styled from "styled-components";

export default function Seat({name, isAvaiable}) {
    return (
        <SeatContainer isAvaiable={isAvaiable}>
            {(Number(name) < 10) ? "0" + name : name}
        </SeatContainer>
    );
}

const SeatContainer = styled.button`
    background-color: ${({isAvaiable}) => isAvaiable ? "#C3CFD9" : "#FBE192"};
    border: 1px solid ${({isAvaiable}) => isAvaiable ? "#808F9D" : "#F7C52B"};
    border-radius: 50%;
    font-family: inherit;
    font-size: 11px;
    height: 26px;
    letter-spacing: 0.04em;
    line-height: 13px;
    margin: 0 3px 18px 3px;
    width: 26px;
`;