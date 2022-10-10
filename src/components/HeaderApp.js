import { useMatch, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function HeaderApp() {
    const isRouteHome = useMatch("/");
    const navigate = useNavigate();
    
    return (
        <HeaderAppContainer>
            {!isRouteHome && <ion-icon name="arrow-back-circle-outline" onClick={() => navigate(-1)}></ion-icon>}
            <h1>CINEFLEX</h1>
        </HeaderAppContainer>
    );
}

const HeaderAppContainer = styled.header`
    align-items: center;
    background-color: #C3CFD9;
    display: flex;
    font-size: 32px;
    height: 67px;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;

    ion-icon {
        cursor: pointer;
        left: 0;
        padding-left: 15px;
        position: fixed;
    }
`;
