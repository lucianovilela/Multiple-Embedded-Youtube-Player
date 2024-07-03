"use client"

import { parse, addPlayer } from '@/app/lib/util'
import { Grid, Box, Card, ListItem, List, IconButton, FormControl, TextField, CardMedia, CardHeader } from '@mui/material';
import { Add, Delete } from '@mui/icons-material';

import { useInfo } from '@/app/context/InfoContext'

import { InputVideo, ItemVideo } from '@/app/components/InputVideo';

const Teste = () => {
    const { action, state } = useInfo();


    return (
        <Box>
            <Box>
                <InputVideo />

            </Box>
            <Box >

                <List container >

                    {state.listVideos.map((v, i) =>
                        <ListItem item xs="1" key={`listaItem-${i}`}>{v.url}

                            <IconButton onClick={() => {
                                action.deleteVideo(v.url)
                            }}>
                                <Delete />
                            </IconButton>
                        </ListItem>)
                    }
                </List>
            </Box>

            <Box >

                <Grid container sx={{height:'100vh'}} >

                    {parse(state.listVideos.map(i=>i.url)).map(v => {
                        return <Grid item xs={12} md={6} lg={4}>
                            <Card>
                                <CardMedia>
                                    <CardHeader title={v}/>
                                    <ItemVideo vid={v} />
                                </CardMedia>
                            </Card>
                        </Grid>
                    }
                    )}
                </Grid>
            </Box>
            <Box>
                <div id='target' />
            </Box>
        </Box>

    )
}

export default Teste;