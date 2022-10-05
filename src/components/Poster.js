import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Poster({disable, src, title}) {
    return (
        <Link to={"/filme"} style={disable && {pointerEvents: 'none' }}>
            <PosterContainer
                alt={`Pôster do filme ${title}`}
                src={src}
            />
        </Link>
    );
}

const PosterContainer = styled.img`
    border: 8px solid #FFFFFF;
    border-radius: 3px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
`;
