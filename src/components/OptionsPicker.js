import { MenuItem, Select } from '@material-ui/core';
import React, { useState } from 'react';
import styled from 'styled-components';
import FormLabel from './formText/FormLabel';

const OptionsPicker = ({ title, list, handleChange }) => {
    const [values, setValues] = useState([]);

    const getOptions = () => {
        let options = [];

        list.sort(function (a, b) {
            if (a.label < b.label) { return -1; }
            if (a.label > b.label) { return 1; }
            return 0;
        });

        list.forEach(option => {
            options.push(<MenuItem value={option}
                style={{ color: values.includes(option) ? 'green' : 'black' }}
            >{option}</MenuItem>);
        });

        return options;
    };

    const changeOptions = value => {
        setValues(
            typeof value === 'string' ? value.split(',') : value,
        );

        handleChange(value);
    };

    return (
        <Options>
            <FormLabel value={title} />
            <StyledSelect
                value={values}
                multiple
                onChange={event => changeOptions(event.target.value)}>
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

& .MuiListItem-root.Mui-selected, .MuiListItem-root.Mui-selected:hover {
    color: #2ca815;
    font-weight: 700;
}
`;



export default OptionsPicker;
