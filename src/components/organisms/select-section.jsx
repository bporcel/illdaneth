import React from 'react';
import { makeStyles, TextField, MenuItem } from '@material-ui/core';

const useStyles = makeStyles({
    sticky: {
        position: 'sticky',
        bottom: 0,
        backgroundColor: 'lightgray',
    },
});

export default function SelectSection() {
    const options = [
        {
            value: 'intro',
            label: 'Introducción',
        },
        {
            value: 'pantheon',
            label: 'Panteón',
        },
        {
            value: 'gods',
            label: 'Dioses'
        },
        {
            value: 'mythology',
            label: 'Mitología'
        }
    ];

    const classes = useStyles();

    const [value, setValue] = React.useState('');

    const handleChange = event => {
        const { value } = event.target;
        setValue(value);
        document.getElementById(value).scrollIntoView();
    };

    return (
        <>
            <TextField
                select
                fullWidth
                variant="filled"
                label="Secciones"
                onChange={handleChange}
                className={classes.sticky}
                {...{ value }}
            >
                {options &&
                    options.map((option, index) => (
                        <MenuItem key={index} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
            </TextField>
        </>
    );
}
