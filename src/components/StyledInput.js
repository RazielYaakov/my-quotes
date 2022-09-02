import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import styled from 'styled-components';

const StyledInput = ({ placeholder, type, onChange, color }) => {
    return (
        <Input type={type} placeholder={placeholder} color={color} onChange={event => onChange(event.target.value)} />
    );
}

const Input = styled.input`
background: transparent;
outline: none;
box-shadow: 0 1px 2px 1px black;
padding: 2px;
width: 10%;
min-width: 200px;
font-size: 1.2em;
font-family: 'Heebo';
color: ${props => props.color === 'white' ? props.color : 'black'};
border-width: 1;
border-radius: 5px;
border-color:  ${props => props.color === 'white' ? 'whitesmoke' : 'black'};
::placeholder{
    color: #9a9999;
}
margin: 10px;   
`;

export default StyledInput;