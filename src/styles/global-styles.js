import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
    overrides: {
        MuiCard: {
            root: {
                marginBottom: '1em',
            },
        },
        MuiPaper: {
            root: {
                marginBottom: '1em',
            },
        },
        MuiTypography: {
            h1: {
                fontSize: '24px',
                margin: '1em 0',
            },
            h2: {
                fontSize: '20px',
                margin: '.75em 0',
            },
            h3: {
                fontSize: '16px',
                margin: '.5em 0',
            },
        },
    },
});

export default theme;
