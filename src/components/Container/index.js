import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.main`
    padding: 15px 35px;
    max-width: auto;
    /* background: #4d2600; */
    background: var(--black);
    height: auto;
    width: auto;
   /* display: flex;
    flex-direction: column;    */
    /*align-items: center;*/
    /*justify-content: center;*/
`;

const Container = ({ children }) => (
    <StyledContainer>{children}</StyledContainer>
)

export default Container