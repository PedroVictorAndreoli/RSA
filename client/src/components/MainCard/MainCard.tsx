import { Box, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import PriceChangeIcon from '@mui/icons-material/PriceChange';
interface Card {
    label: string
    numero: string
    descricao: string
    descricaoComplemento: string
}

export function MainCard({ label, numero, descricao, descricaoComplemento }: Card) {

    return (
        <>
            <React.Fragment>
                <CardContent>
                    <Typography variant="h5" component="div">
                        {label}
                    </Typography>
                    <Grid container spacing={0}>
                        < PriceChangeIcon sx={{ fontSize: 60 }} />
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                            }}
                        >
                            <Typography variant="h6" component="div" sx={{ ml: 1.5 }}>
                                R$ {numero}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid container spacing={0}>
                        {descricao} {descricaoComplemento}
                    </Grid>
                </CardContent>
            </React.Fragment >
        </>)
}
