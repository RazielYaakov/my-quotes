import 'react-toastify/dist/ReactToastify.css';

import { FormControlLabel, makeStyles, Radio, RadioGroup, withStyles } from '@material-ui/core';
import React from 'react';

const YesOrNoRadios = ({ handleSelect }) => {
    const classes = useStyles();

    return (
        <RadioGroup row name="position" onChange={event => handleSelect(event.target.value)}>
            <FormControlLabel
                value="Yes"
                control={<StyledRadio color="default" />}
                label="Yes"
                classes={{ label: classes.label }}
            />
            <FormControlLabel
                value="No"
                control={<StyledRadio color="default" />}
                label="No"
                classes={{ label: classes.label }}
            />
        </RadioGroup>
    );
}

const useStyles = makeStyles(() => ({
    label: {
        fontFamily: 'Heebo'
    }
}));

const StyledRadio = withStyles(() => ({
    'root': {
        color: 'white',
    }
}))(Radio);

export default YesOrNoRadios;