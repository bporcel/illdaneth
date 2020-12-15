import React from 'react';
import {
    Card,
    CardContent,
    Typography,
    Grid,
    makeStyles,
} from '@material-ui/core';
import DyD5 from '../../img/dyd5.png';
import MapaFisico from '../../img/mapa-fisico.jpg';
import MapaPolitico from '../../img/mapa-politico.jpg';
import theme from '../../styles/global-styles';

const useStyles = makeStyles({
    dyd: {
        width: '50%',
    },
    mapa: {
        width: '100%',
        margin: theme.spacing(1, 0),
    },
});

export default function LandingPage() {
    const classes = useStyles();
    return (
        <>
            <Card elevation={5}>
                <CardContent>
                    <Typography variant="h1">
                        Bienvenido al mundo de Îldanneth
                    </Typography>
                    <Typography variant="body1">
                        Esta web te servirá como guía para la creación de tus
                        personajes, sus historias y trasfondo
                    </Typography>
                    <Grid container justify="center">
                        <img
                            src={DyD5}
                            alt="Logo Dungeons and Dragons 5"
                            className={classes.dyd}
                        />
                    </Grid>
                    <Typography>
                        Esta campaña está pensada para jugarse utilizando el
                        sistema de reglas empleado en D&amp;D 5ª Edición. Sin
                        embargo, salvo en apartados concretos donde sea
                        conveniente, no se hablará de reglas en esta guía. Este
                        hecho permite que puedas emplearla para jugarla con tu
                        grupo utilizando otros sistemas de fantasía, como
                        Pathfinder, haciendo pocas adaptaciones.
                    </Typography>
                    <Typography variant="h2">El mundo de Îldanneth</Typography>
                    <Grid container direction="row" justify="center">
                        <Grid item>
                            <img
                                src={MapaFisico}
                                alt="Mapa fisico de Îldannet"
                                className={classes.mapa}
                            />
                            <Typography>
                                Îldanneth (transcripción al alfabeto común del
                                nombre que le dieron los primeros elfos al mundo
                                que se encontraron tras el Despertar. Se cree
                                que significa Nuevo Mundo) es un mundo de
                                fantasía creado por el DM Kryon. Esta guía
                                plantea el mundo a modo de "sandbox" para poder
                                conocer y tener un contexto global del universo
                                y todo lo que hay en él. Es un mundo grande con
                                variedad de culturas, tanto humanas como no
                                humanas. Se divide en diversos reinos y
                                territorios, cada uno de ellos explicado en su
                                respectivo apartado en esta guía-web. Este
                                universo tiene también su propio sistema de
                                deidades y mitologías transversales a todas las
                                culturas, aunque algunas de ellas, las más
                                aisladas de una u otra manera, tienen sus
                                propios dioses y mitos. Esperamos que disfutéis
                                de las aventuras que podáis crear usando este
                                mundo.
                            </Typography>
                        </Grid>
                        <Grid item>
                            <img
                                src={MapaPolitico}
                                alt="Mapa politico de Îldannet"
                                className={classes.mapa}
                            />
                            <Typography>
                                La división política del mundo de îldanneth, en
                                el año 3987 del Nuevo Comienzo, viene detallada
                                en este mapa a nivel general. Se podrá encontrar
                                información detallada de cada reino y región
                                concreta en su respectiva entrada del apartado
                                de Reinos, donde se detallarán también las
                                costumbres, religiones, fiestas, formas de
                                gobierno, ciudades, grupos de interés, etc.
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    );
}
