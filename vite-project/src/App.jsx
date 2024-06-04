import { useState } from 'react'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './App.css'
import { Card, CardActionArea, CardContent, CardHeader, Grid } from '@mui/material';

function App() {


  return (
    <Container maxWidth="sm">
      <Grid container spacing={2}>
        {
          [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => (
            <Grid item xs={4} lg={12}  >
              <Card variant='elevation'>
                <CardActionArea>
                  <CardHeader title={`Video ${item}`}>
                  </CardHeader>
                  <CardContent>{item}</CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))
        }

      </Grid>
    </Container>
  )
}

export default App
