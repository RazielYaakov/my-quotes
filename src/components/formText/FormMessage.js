import React from 'react';
import styled from 'styled-components';

const FormMessage = ({ value }) => {
    return (
        <StyledFormMessage>{value}</StyledFormMessage>
    );
};

export default FormMessage;

const StyledFormMessage = styled.h2`
color: whitesmoke;
font-size: 1.5em;
font-weight: 500;
`;