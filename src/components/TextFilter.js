import React from 'react';
import styled from 'styled-components';
import { GiMagnifyingGlass } from 'react-icons/gi';

const TextFilter = ({ handleFilter, placeholder = undefined }) => {
    return (
        <Filter>
            <GiMagnifyingGlass />
            <StyledInput
                placeholder={placeholder ? placeholder : "הקלד כדי לסנן..."}
                type="text"
                onChange={event => handleFilter(event.target.value)}
            />
        </Filter>
    );
}

const Filter = styled.div`
font-family: 'Heebo';
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
background: white;
color: black;
font-size: 1.1em;
min-width: 270px;
border-radius: 20px;
outline: none;
padding: 0 5px;
`;

const StyledInput = styled.input`
font-family: 'Heebo';
background: white;
color: black;
font-size: 1em;
min-width: 250px;
border-width: 1px;
border-style: double;
border-color: whitesmoke;
border-image: none;
padding: 5px;
border-radius: 20px;
outline: none;
`;

export default TextFilter;
