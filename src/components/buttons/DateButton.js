import 'react-datepicker/dist/react-datepicker.css';

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import styled from 'styled-components';
import { DEFAULT_COLOR, DEFAULT_HOVER_COLOR } from '../../constants';

const getMaxDate = () => {
    return new Date(new Date().setDate(new Date().getDate() + 13));
}

const DateButton = ({ handleDateChange, value, hasFuture }) => {
    const [startDate, setStartDate] = useState(new Date());

    const DateCustom = ({ value, onClick }) => (
        <StyledDateButton onClick={onClick}>
            {value}
        </StyledDateButton>
    );

    const handleDate = (date) => {
        setStartDate(date);
        handleDateChange(date);
    };

    const getSelectedDate = () => {
        return value !== undefined ? new Date(value) : startDate;
    }

    return (
        <DatePicker
            selected={getSelectedDate()}
            maxDate={hasFuture ? getMaxDate() : new Date()}
            dateFormat='dd/MM/yyyy'
            onChange={date => handleDate(date)}
            showMonthDropdown
            showYearDropdown
            withPortal
            dropdownMode="select"
            customInput={<DateCustom />} />
    );
};

const StyledDateButton = styled.button`
align-items: center;
background: ${DEFAULT_COLOR};
color: white;
height: 5%;
margin-right: 20px;
border-radius: 5px;
border: 0;
padding: 5px;
font-size: 1em;
font-family: 'Heebo';
&:focus {
    outline-width: 0;
}
&:hover {
    background: ${DEFAULT_HOVER_COLOR};
    transition-duration: 400ms;
}
`;

export default DateButton;
