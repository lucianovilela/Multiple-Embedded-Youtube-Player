import { useEffect, useState } from 'react'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './App.css'
import { Card, CardActionArea, CardContent, CardHeader, CircularProgress, Grid } from '@mui/material';

import TextArea from './components/TextArea';
import { VideoArea } from './components/VideoArea';

import  Teste  from './Teste'
function App() {

  useEffect(()=>{
    try {
      videoarea = document.getElementById("videoarea");
      
    } catch (error) {
      console.error(error)
    }
  });

  return (
    <Container >
      <Teste/>
    </Container>
  )
}

export default App
