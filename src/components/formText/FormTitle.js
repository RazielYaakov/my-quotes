import React from 'react';
import styled from 'styled-components';

const FormTitle = ({ value }) => {
    return (
        <StyledFormTitle>{value}</StyledFormTitle>
    );
};

export default FormTitle;

const StyledFormTitle = styled.h2`
color: whitesmoke;
font-size: 1.4em;
font-weight: 700;
`;