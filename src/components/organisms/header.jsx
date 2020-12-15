import React from 'react';
import { Link } from 'react-router-dom';
import {
    Typography,
    Card,
    CardContent,
    Grid,
    IconButton,
    Popover,
    makeStyles,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
    mobileMenu: {
        padding: theme.spacing(1),
    },
    link: {
        color: 'black',
        textDecoration: 'none',
        padding: theme.spacing(1),

        '&:hover': {
            color: 'blue',
        },
    },
    menu: {
        marginTop: theme.spacing(3),
    },
}));

export default function Header({ isMobile }) {
    const classes = useStyles();
    const [showMenu, setShowMenu] = React.useState(false);
    const [anchorElement, setAnchorElement] = React.useState(null);

    const handleClickShowMenu = event => {
        setAnchorElement(event.currentTarget);
        setShowMenu(!showMenu);
    };

    const handleClickClosePopover = () => {
        setAnchorElement(null);
        setShowMenu(!showMenu);
    };

    const printMenu = () => {
        return (
            <>
                <Typography>
                    <Link className={classes.link} to="/">
                        Landing Page
                    </Link>
                </Typography>
                <Typography>
                    <Link className={classes.link} to="/reinos">
                        Reinos
                    </Link>
                </Typography>
                <Typography>
                    <Link className={classes.link} to="/razas">
                        Razas
                    </Link>
                </Typography>
                <Typography>
                    <Link className={classes.link} to="/religiones">
                        Religiones
                    </Link>
                </Typography>
                <Typography>
                    <Link className={classes.link} to="">
                        Cronologia
                    </Link>
                </Typography>
                <Typography>
                    <Link className={classes.link} to="">
                        Nuestra Historia
                    </Link>
                </Typography>
                <Typography>
                    <Link className={classes.link} to="/jugador">
                        Jugador
                    </Link>
                </Typography>
            </>
        );
    };

    return (
        <>
            <Card elevation={5}>
                <CardContent>
                    <Grid
                        container
                        direction={isMobile ? 'row' : 'column'}
                        justify="space-between"
                        alignItems="center"
                    >
                        <Typography variant="h1">Îldanneth</Typography>

                        {isMobile ? (
                            <>
                                <IconButton onClick={handleClickShowMenu}>
                                    <MenuIcon />
                                </IconButton>
                                <Popover
                                    open={showMenu}
                                    anchorEl={anchorElement}
                                    onClose={handleClickClosePopover}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                >
                                    <Grid
                                        container
                                        direction="column"
                                        alignItems="flex-start"
                                        className={classes.mobileMenu}
                                    >
                                        {printMenu()}
                                    </Grid>
                                </Popover>
                            </>
                        ) : (
                            <Grid
                                item
                                container
                                direction="row"
                                justify="space-around"
                                className={classes.menu}
                            >
                                {printMenu()}
                            </Grid>
                        )}
                    </Grid>
                </CardContent>
            </Card>
        </>
    );
}
