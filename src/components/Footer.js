import Poster from "./Poster";
import styled from "styled-components";

export default function Footer({showtimeName, src, title, weekday}) {
    return (
        <FooterContainer>
            <Poster disable={true} src={src} title={title}/>
            <span>
                <h2>{title}</h2>
                <h2>{weekday && showtimeName && `${weekday} - ${showtimeName}`}</h2>
            </span>
        </FooterContainer>
    );
}

const FooterContainer = styled.footer`
    align-items: center;
    background-color: #C3CFD9;
    border-top: 1px solid #9EADBA;
    bottom: 0;
    display: flex;
    height: 117px;
    left: 0;
    position: fixed;
    width: 100%;
    z-index: 1;

    img {
        margin: 0 10px 0 14px;
        width: 64px;
    }
`;
