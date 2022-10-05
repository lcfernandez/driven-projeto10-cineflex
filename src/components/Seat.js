import styled from "styled-components";

export default function Seat({colorBack, colorBorder, name}) {
    return (
        <SeatContainer colorBack={colorBack} colorBorder={colorBorder}>
            {(Number(name) < 10) ? "0" + name : name}
        </SeatContainer>
    );
}

const SeatContainer = styled.button`
    background-color: ${({colorBack}) => colorBack};
    border: 1px solid ${({colorBorder}) => colorBorder};
    border-radius: 50%;
    font-family: inherit;
    font-size: 11px;
    height: 26px;
    letter-spacing: 0.04em;
    line-height: 13px;
    margin: 0 3px 18px 3px;
    width: 26px;
`;
