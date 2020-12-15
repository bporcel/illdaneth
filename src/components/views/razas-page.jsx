import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

export default function RazasPage() {
    return (
        <>
            <Card elevation={5}>
                <CardContent>
                    <Typography variant="h1">Razas</Typography>
                    <Typography variant="body1">
                        El apartado de razas muestra por una parte las criaturas
                        más comunes en los sistemas de Dragones y Mazmorras y de
                        Pathfinder. Las razas y criaturas de todo tipo de
                        Îldanneth están basadas en los bestiarios y expansiones
                        de ambos sistemas. Por otra parte se dedica también una
                        entrada a explicar de manera concreta las razas
                        seleccionables como jugables, es decir, que pueden ser
                        elegidas en el mundo de Îldanneth como raza de un PJ.
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
}
