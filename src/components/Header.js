import styled from "styled-components";

export default function Header() {
    return (
        <HeaderContainer>
            <h1>CINEFLEX</h1>
        </HeaderContainer>
    );
}

const HeaderContainer = styled.div`
    background-color: #C3CFD9;
    display: flex;
    height: 67px;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
`;
