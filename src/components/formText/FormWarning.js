import React from 'react';
import styled from 'styled-components';

const FormWarning = ({ value }) => {
    return (
        <StyledFormWarning>{value}</StyledFormWarning>
    );
};

export default FormWarning;

const StyledFormWarning = styled.h2`
color: red;
font-size: 1.4em;
font-weight: 500;
margin-top: 5px;
text-align: center;
`;