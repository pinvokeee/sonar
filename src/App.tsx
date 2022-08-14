import { Box, Button, CssBaseline, Drawer, Paper, Stack } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
// import './App.css';

import ComponentAppBar from './components/ComponentAppBar';
import ComponentAppContainer from './components/ComponentAppContainer';
import { ComponentFlowChartCanvas } from './components/flowChart/tsx/canvasViewer/ComponentFlowChartSVGCanvas';
import Figure from './components/flowChart/tsx/class/Figure';
import FlowChart from './components/flowChart/tsx/class/FlowChart';
import { ComponentFlowChart } from './components/flowChart/tsx/elementViewer/ComponentFlowChart';
// import ComponentFlowChart from './components/flowChart/tsx/ComponentFlowChart';

// import ComponentFlowChart from './components/ComponentFlowChart';


function App() 
{
  const flowChart = new FlowChart();
  flowChart.loadMap(test_map);

  console.log(flowChart);

  return (

    <div className="App">
      {/* <Box sx={{ display: 'flex' }}> */}
      <ComponentAppBar></ComponentAppBar>

      {/* <ComponentAppContainer>

        </ComponentAppContainer>
       */}

       <ComponentFlowChart source={flowChart}></ComponentFlowChart>

      {/* <ComponentFlowChart source={flowChart}></ComponentFlowChart> */}

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


const test_map =
  [
    {
      text: "商品の販売ですか？",
      children:
        [
          {
            text: "他の者から購入した商品ですか？",
          },

          {
            text: "業務用固定資産等の譲渡ですか？",
            connectToID: 5,
            children:
              [
                {
                  text: "テスト手sつおでちｌｋです！",
                  connectToID: 5,
                }
              ]
          },

        ]
    },

    {
      text: "2222222",
      children:
        [
          {
            text: "2AAAAAA",
          },

          {
            text: "2BBBBBBB",
          },

          {
            text: "2cccccccc",

            children:
              [
                {
                  text: "2caaaaaaa",
                },

                {
                  text: "2cbbbbbbb",
                }
              ]
          },

          {
            text: "2dddd",
          },

          {
            text: "2eeeeeeeeeeeeeee",
          },

          {
            text: "2fffffffffffff",
          },


        ]
    },
  ]


export default App;
