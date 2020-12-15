import React from 'react';
import { ThemeProvider, Grid, makeStyles } from '@material-ui/core';
import Header from './header';
import theme from '../../styles/global-styles';

const useStyles = makeStyles({
    container: {
        width: '80%',
        margin: 'auto',
        padding: '1em',
    },
});

export default function Layout({ children }) {
    const classes = useStyles();
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        if (window.innerWidth < 800 && window.innerHeight < 800) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <Grid container direction="column" className={classes.container}>
                <Grid item>
                    <Header {...{ isMobile }} />
                </Grid>
                <Grid item>{children}</Grid>
            </Grid>
        </ThemeProvider>
    );
}
