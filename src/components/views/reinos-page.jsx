import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

export default function ReinosPage() {
    return (
        <>
            <Card elevation={5}>
                <CardContent>
                    <Typography variant="h1">Reinos</Typography>
                    <Typography variant="h2">Imperio Asthur:</Typography>
                    <Typography variant="body1">
                        El Imperio que hoy en día se alza a lo largo y ancho de
                        la -renombrada- Península Imperial no siempre fue la
                        unión que conocemos. Hace más de 1000 años, tras el
                        deshielo del Invierno Seco, un hombre proveniente de la
                        ciudad estado de <i>Antica</i> logró unir, tanto por la
                        fuerza como por la diplomacia, a todos los reinos y
                        repúblicas desde de la región de la Costa Escarpada
                        hasta las Montañas Flecha. Por primera vez desde el
                        Despertar las culturas nord-orientales del Viejo Mundo,
                        las primeras en civilizarse y generadoras de las lenguas
                        antiguas y nuevas, se unían en una cultura común bajo el
                        mandato de su nuevo Emperador.
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
}
