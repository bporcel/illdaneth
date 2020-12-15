import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
    Redirect,
    HashRouter,
} from 'react-router-dom';
import { Grid, makeStyles } from '@material-ui/core';
import LandingPage from './landing-page';
import RazasPage from './razas-page';
import ReligionesPage from './religiones-page';
import ReinosPage from './reinos-page';
import JugadorPage from './jugador-page';
import Layout from '../organisms/layout';

const useStyles = makeStyles({
    container: {
        backgroundColor: 'lightcoral',
        paddingTop: '1em',
        paddingBottom: '10em',
    },
});

export default function Index() {
    const classes = useStyles();
    return (
        <Grid container className={classes.container}>
            {/* <BrowserRouter> */}
            <HashRouter>
                <Switch>
                    <Layout>
                        <Route exact path="/" render={() => <LandingPage />} />
                        <Route
                            exact
                            path="/razas"
                            render={() => <RazasPage />}
                        />
                        <Route
                            exact
                            path="/religiones"
                            render={() => <ReligionesPage />}
                        />
                        <Route
                            exact
                            path="/reinos"
                            render={() => <ReinosPage />}
                        />
                        <Route
                            exact
                            path="/jugador"
                            render={() => <JugadorPage />}
                        />

                        <Redirect to="/"></Redirect>
                    </Layout>
                </Switch>
            </HashRouter>
            {/* </BrowserRouter> */}
        </Grid>
    );
}
