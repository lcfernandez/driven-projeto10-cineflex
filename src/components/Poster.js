import styled from "styled-components";

export default function Poster({src, title}) {
    return (
        <PosterContainer
            alt={`Pôster do filme ${title}`}
            src={src}
        />
    );
}

const PosterContainer = styled.img`
    border: 10px solid #FFFFFF;
    border-radius: 3px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    height: 209px;
    margin: 0 15px 20px 15px;
    width: 145px;
`;