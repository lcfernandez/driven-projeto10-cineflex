import styled from "styled-components";

export default function HeaderAction({action}) {
    return (
        <HeaderActionContainer>
            <h3>{action}</h3>
        </HeaderActionContainer>
    );
}

const HeaderActionContainer = styled.div`
    display: flex;
    height: 110px;
`;
