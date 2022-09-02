import React from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";

import StyledButton from './buttons/StyledButton';
import { TRANSPARENT } from '../constants';

const AddQuote = () => {
    let history = useHistory();

    const openAddQuotePage = () => {
        history.push("/AddQuote");
    };

    return (
        <AddQuoteDiv>
            <AddButton text={"+"} color={TRANSPARENT} onClick={openAddQuotePage} />
        </AddQuoteDiv>
    );
}

const AddQuoteDiv = styled.div`
display: flex;
justify-content: flex-start;
align-items: flex-start;
flex-direction: column;
`;

const AddButton = styled(StyledButton)`
background: transparent;
font-size: 1.8em;
min-width: 30px;
color: whitesmoke;
`;

export default AddQuote;