import { Box, Button, CssBaseline, Drawer, Paper, Stack } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import './App.css';

import ComponentAppBar from './components/ComponentAppBar';
import ComponentAppContainer from './components/ComponentAppContainer';

function App() 
{
  return (
    
    <div className="App">
      {/* <Box sx={{ display: 'flex' }}> */}
        <ComponentAppBar></ComponentAppBar>

        <ComponentAppContainer>

        </ComponentAppContainer>


        {/* <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
        }}
      ></Drawer> */}

      {/* </Box> */}

      {/* <Container sx={{ height: "100vh", backgroundColor: "red" }}> */}
      {/* <Stack direction="row">
        <Paper sx={ { height: "100vh", overflow: "auto" } }>
          <Stack>
            <Button>AAA</Button> 
            <Button>BBB</Button> 
            <Button>CCC</Button> 
            <Button>CCC</Button> 
            <Button>CCC</Button> 
            <Button>CCC</Button> 
            <Button>CCC</Button> 
            <Button>CCC</Button> 
            <Button>CCC</Button> 
            <Button>CCC</Button> 
            <Button>CCC</Button> 
            <Button>CCC</Button> 
            <Button>CCC</Button> 
            <Button>CCC</Button> 
            <Button>CCC</Button> 
            <Button>CCC</Button> 
            <Button>CCC</Button> 
            <Button>CCC</Button> 
            <Button>CCC</Button> 
            <Button>CCC</Button> 
            <Button>CCC</Button> 
            <Button>CCC</Button> 
            <Button>CCC</Button> 
            
          </Stack>
        </Paper>

        <Stack>
          <Button>AAA</Button> 
          <Button>BBB</Button> 
          <Button>CCC</Button> 
        </Stack>
      </Stack> */}
      {/* </Container> */}
  


    </div>

  );
}

export default App;
