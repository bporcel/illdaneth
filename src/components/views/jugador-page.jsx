import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

export default function JugadorPage() {
    return (
        <>
            <Card elevation={5}>
                <CardContent>
                    <Typography variant="h1">Jugador</Typography>
                    <Typography variant="body1">
                        Aqui puedes gestionar tu jugador de dyd.
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
}