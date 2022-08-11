import * as React from "react";
import { styled, alpha, Theme } from '@mui/material/styles';
import * as MUI from "@mui/material";
import * as Color from '@mui/material/colors';
import * as MuiIcon from "@mui/icons-material";

export default class ComponentAppContainer extends React.Component
{
    constructor(props : object)
    {
        super(props);
    }
    
    render(): React.ReactNode 
    {

        const Root = styled("div")(({ theme }) => 
        ({
            display: "flex",

            [theme.breakpoints.down('sm')]: 
            {
                backgroundColor: "red",
                height: `calc(100vh - 56px)`,
            },
            
            [theme.breakpoints.up('sm')]: 
            {
                backgroundColor: "blue",
                height: `calc(100vh - 64px)`,
            },
        }));

        return (
            <Root>
                <MUI.Grid container>
                    <MUI.Grid xs={8} sx={{ height: "100%",  overflow: "auto" }}>
                        <MUI.Stack>
                        <MUI.Button>AAA</MUI.Button> 
                        <MUI.Button>BBB</MUI.Button> 
                        <MUI.Button>CCC</MUI.Button> 
                        <MUI.Button>CCC</MUI.Button> 
                        <MUI.Button>CCC</MUI.Button> 
                        <MUI.Button>CCC</MUI.Button> 
                        <MUI.Button>CCC</MUI.Button> 
                        <MUI.Button>CCC</MUI.Button> 
                        <MUI.Button>CCC</MUI.Button> 
                        <MUI.Button>CCC</MUI.Button> 
                        <MUI.Button>CCC</MUI.Button> 
                        <MUI.Button>CCC</MUI.Button> 
                        <MUI.Button>CCC</MUI.Button> 
                        <MUI.Button>CCC</MUI.Button> 
                        <MUI.Button>CCC</MUI.Button> 
                        <MUI.Button>CCC</MUI.Button> 
                        <MUI.Button>CCC</MUI.Button> 
                        <MUI.Button>CCC</MUI.Button> 
                        <MUI.Button>CCC</MUI.Button> 
                        <MUI.Button>CCC</MUI.Button> 
                        <MUI.Button>CCC</MUI.Button> 
                        <MUI.Button>CCC</MUI.Button> 
                        <MUI.Button>CCC</MUI.Button> 
                        </MUI.Stack>
                    </MUI.Grid>
                    <MUI.Grid xs={4} sx={{ height: "100%",  overflow: "auto" }}>
                        <MUI.Stack>
                        <MUI.Button>AAA</MUI.Button> 
                        <MUI.Button>BBB</MUI.Button> 
                        <MUI.Button>CCC</MUI.Button> 
                        <MUI.Button>CCC</MUI.Button> 
                        <MUI.Button>CCC</MUI.Button> 
                        <MUI.Button>CCC</MUI.Button> 
                        <MUI.Button>CCC</MUI.Button> 
                        <MUI.Button>CCC</MUI.Button> 
                        <MUI.Button>CCC</MUI.Button> 
                        <MUI.Button>CCC</MUI.Button> 
                        <MUI.Button>CCC</MUI.Button> 
                        <MUI.Button>CCC</MUI.Button> 
                        <MUI.Button>CCC</MUI.Button> 
                        <MUI.Button>CCC</MUI.Button> 
                        <MUI.Button>CCC</MUI.Button> 
                        <MUI.Button>CCC</MUI.Button> 
                        <MUI.Button>CCC</MUI.Button> 
                        <MUI.Button>CCC</MUI.Button> 
                        <MUI.Button>CCC</MUI.Button> 
                        <MUI.Button>CCC</MUI.Button> 
                        <MUI.Button>CCC</MUI.Button> 
                        <MUI.Button>CCC</MUI.Button> 
                        <MUI.Button>CCC</MUI.Button> 
                        </MUI.Stack>
                    </MUI.Grid>
                </MUI.Grid>
            </Root>
        )
    }
}