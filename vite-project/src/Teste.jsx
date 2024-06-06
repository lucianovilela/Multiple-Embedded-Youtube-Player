import React, { useEffect, useRef, useState } from 'react'
import { load, parse, addPlayer } from './lib/util'
import { Grid, Box, Card, ListItem, List, IconButton } from '@mui/material';
import { AccessAlarm, ThreeDRotation, Delete } from '@mui/icons-material';

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
    const refVideo = useRef();

    return (<div ref={refVideo} id={`${vid}`}>{vid} </div>)

}



const Teste = () => {
    const [target, setTarget] = useState(null);
    const [videos, setVideos] = useState([
        "https://www.youtube.com/watch?v=o74vC5HMJFg",
        "https://www.youtube.com/watch?v=gzXxhegM9R0",
        "https://www.youtube.com/watch?v=nBkiOUVFJuU"]);


    return (
        <Box>

            <Box alignItems={'center'} justifyContent={'center'}>

                <List container >

                    {videos.map((v, i) =>
                        <ListItem item xs="1" key={`listaItem-${i}`}>{v}
                            <IconButton aria-label="delete" onClick={() => {
                                setVideos(["https://www.youtube.com/watch?v=o74vC5HMJFg",
                                    "https://www.youtube.com/watch?v=gzXxhegM9R0"])
                            }}>
                                <Delete />
                            </IconButton>
                        </ListItem>)
                    }
                </List>
            </Box>

            <Box alignItems={'center'} justifyContent={'center'}>

                <Grid container >

                    {parse(videos).map(v => {
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