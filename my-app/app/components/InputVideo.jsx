"use client";
import React, { useEffect, useRef, useState } from 'react'

import { Grid, Box, Card, ListItem, List, IconButton, FormControl, TextField, CardMedia, CardHeader } from '@mui/material';
import { Add, Delete } from '@mui/icons-material';

import { useInfo } from '../context/InfoContext'

export const InputVideo = () => {
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


export const  ItemVideo = ({ vid }) => {
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

