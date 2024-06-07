import { useEffect, useState } from 'react'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './App.css'
import { Card, CardActionArea, CardContent, CardHeader, CircularProgress, Grid } from '@mui/material';

import TextArea from './components/TextArea';
import { VideoArea } from './components/VideoArea';

import Teste from './Teste'
import { InfoContext } from './context/InfoContext';
function App() {


  return (
    <InfoContext>

      <Container >
        <Teste />
      </Container>
    </InfoContext>
  )
}

export default App
