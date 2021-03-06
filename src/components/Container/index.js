import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.main`
    padding: 15px 35px;
    max-width: auto;
    background: var(--black);
    height: auto;
    width: auto;
`;

const Container = ({ children }) => (
    <StyledContainer>{children}</StyledContainer>
)

export default Container