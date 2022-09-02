import { MenuItem, Select } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import FormLabel from './formText/FormLabel';

const OneOptionPicker = ({ title, list, handleChange }) => {
    const getOptions = () => {
        let options = [];

        list.sort(function (a, b) {
            if (a.label < b.label) { return -1; }
            if (a.label > b.label) { return 1; }
            return 0;
        });

        list.forEach(option => {
            options.push(<MenuItem value={option}>{option}</MenuItem>);
        });

        return options;
    };

    return (
        <Options>
            <FormLabel value={title} />
            <StyledSelect
                onChange={event => handleChange(event.target.value)}>
                {getOptions()}
            </StyledSelect>
        </Options>
    );
}

const Options = styled.div`
display: flex;
justify-content: space-around;
align-items: flex-start;
flex-direction: column;
margin-right: 5px;
`;

const StyledSelect = styled(Select)`
background: whitesmoke;
font-family: 'Heebo';
font-size: 1.1em;
width: 10%;
min-width: 205px;
z-index: 100;
padding: 2px;
margin: 5px 2px;
box-shadow: 1px whitesmoke;
border-width: 1px;
border-radius: 2px;
`;



export default OneOptionPicker;
