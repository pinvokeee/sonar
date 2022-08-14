import * as React from "react";
import { styled, alpha } from '@mui/material/styles';
import * as MUI from "@mui/material";
import * as Color from '@mui/material/colors';
import * as MuiIcon from "@mui/icons-material";

export default class ComponentAppBar extends React.Component
{
    constructor(props : object)
    {
        super(props);
    }
    
    render(): React.ReactNode 
    {
        const SearchDiv = styled('div')(({ theme }) => 
        ({
            color: theme.palette.common.white,
            position: 'relative',
            marginLeft: theme.spacing(2),
            // marginRight: theme.spacing(2),
            padding: 4,
            paddingLeft: 12,
            width: "100%",
            borderRadius: 3,
            textAlign: "left",
            backgroundColor: alpha(theme.palette.common.white, 0.15),

            '&:hover': {
                backgroundColor: alpha(theme.palette.common.white, 0.25),
              },

        }));

        const SeachInputBase = styled(MUI.InputBase)(({ theme }) =>
        ({
            color: "inherit",
            width: "100%",
        }));

        const SearchIconWrapper = styled("div")(({ theme }) =>
        ({            
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: theme.palette.common.white,
        }));

        return (
            <MUI.AppBar color="primary" position="static" sx={{ boxShadow: "none", zIndex: (theme) => theme.zIndex.drawer - 1 }}>
                <MUI.Toolbar>
                
                <MUI.Typography variant="h6" component="div">SONAR</MUI.Typography>

                <SearchDiv>
                    <SeachInputBase placeholder="検索" startAdornment={
                        <MUI.InputAdornment position="start">
                        <SearchIconWrapper>
                            <MuiIcon.Search />
                        </SearchIconWrapper>
                    </MUI.InputAdornment>
                    }/>
                </SearchDiv>
                
                </MUI.Toolbar>
          </MUI.AppBar>
        );
    }
}