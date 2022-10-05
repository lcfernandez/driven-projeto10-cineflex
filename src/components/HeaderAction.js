import styled from "styled-components";

export default function HeaderAction({children}) {
    return (
        <HeaderActionContainer>
            {children}
        </HeaderActionContainer>
    );
}

const HeaderActionContainer = styled.div`
    display: flex;
    height: 110px;
`;
