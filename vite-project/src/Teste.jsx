import React, { useEffect, useRef, useState } from 'react'
import { parse, addPlayer } from './lib/util'
import { Grid, Box, Card, ListItem, List, IconButton, FormControl, TextField } from '@mui/material';
import { Add, Delete } from '@mui/icons-material';

import { useInfo } from './context/InfoContext'

const InputVideo = () => {
    const { action, state } = useInfo();
    const [url, setUrl] = useState('')
    return (
        <Box alignItems={'center'}>
            <TextField

                type="url"
                id="urlY"
                label="Url Youtube"
                helperText="https://www.youtube.com/watch?v=nBkiOUVFJuU"
                value={url}
                onChange={(event) => setUrl(event.target.value)}
            />
            <IconButton onClick={() => {
                action.addVideo(url);
                setUrl('');
            }} color="primary">
                <Add />
            </IconButton>
        </Box>
    )
}


const ItemVideo = ({ vid }) => {
    useEffect(() => {
        var player = new YT.Player(vid, {
            height: 'auto',
            width: 'auto',
            videoId: vid,
            events: {
                'onStateChange': () => { console.log(`onPlayerStateChange ${vid}`) }
            }

        }
        )
    }, [vid])


    return (<div id={`${vid}`}>{vid} </div>)

}



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
                        <ListItem item xs="1" key={`listaItem-${i}`}>{v}

                            <IconButton onClick={() => {
                                action.deleteVideo(v)
                            }}>
                                <Delete />
                            </IconButton>
                        </ListItem>)
                    }
                </List>
            </Box>

            <Box >

                <Grid container >

                    {parse(state.listVideos).map(v => {
                        return <Grid item xs="12">
                            <ItemVideo vid={v} />
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

export default Teste