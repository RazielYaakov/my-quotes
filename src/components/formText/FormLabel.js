import React from 'react';
import styled from 'styled-components';

const FormLabel = ({ value }) => {
    return (
        <StyledFormLabel>{value}</StyledFormLabel>
    );
};

export default FormLabel;

const StyledFormLabel = styled.h2`
color: whitesmoke;
font-size: 1em;
font-weight: 700;
margin: 10px;
margin-right: 0;
`;