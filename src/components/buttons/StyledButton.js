import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

import {
    DANGER_COLOR,
    DANGER_HOVER_COLOR,
    DEFAULT_COLOR,
    DEFAULT_HOVER_COLOR,
    UPDATE_COLOR,
    UPDATE_HOVER_COLOR,
    TRANSPARENT
} from '../../constants';

const useStyles = makeStyles((color) => ({
    button: {
        color: 'white',
        display: 'flex',
        minWidth: 130,
        maxWidth: 150,
        fontSize: '1.1em',
        fontWeight: 700,
        padding: '5px 0',
        fontFamily: 'Heebo',
        background: props => getColor(props.color),
        margin: 10,
        '&:hover': {
            background: props => getHoverColor(props.color),
        }
    },
}));

const StyledButton = ({ text, onClick = () => {}, color }) => {
    const classes = useStyles({ color });

    return (
        <Button variant="contained" className={classes.button} color={color} onClick={() => onClick()}>{text}</Button>
    )
};

export default StyledButton;

const getColor = (color) => {
    switch (color) {
        case UPDATE_COLOR:
            return UPDATE_COLOR;
        case TRANSPARENT:
            return TRANSPARENT;
        case DANGER_COLOR:
            return DANGER_COLOR;
        default:
            return DEFAULT_COLOR;
    }
};

const getHoverColor = (color) => {
    switch (color) {
        case UPDATE_COLOR:
            return UPDATE_HOVER_COLOR;
        case DANGER_COLOR:
            return DANGER_HOVER_COLOR;
        default:
            return DEFAULT_HOVER_COLOR;
    }
};