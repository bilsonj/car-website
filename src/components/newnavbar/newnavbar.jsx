import { Box,AppBar,Toolbar ,Typography,Tab,Tabs,Button} from "@mui/material";
import React, { useState } from "react";
import "./newnavbar.css";
import MenuIcon from '@mui/icons-material/Menu';
function Newnavbar(){
    const[color,setcolor]=useState()
    return(
       <Box >
        <React.Fragment>
        <AppBar className="nav-color">
            <Toolbar>
            <Typography variant="h4" className="nav-heading">Cars  </Typography>
            <MenuIcon className="new-icon"/>
            <Tabs className="newnav" value={color} onChange={(e,color)=>setcolor(color)} indicatorColor="secondary"  textColor="inherit">
                <Tab label="Home" className="nav-menu"/>
                <Tab label="About" className="nav-menu"/>
                <Tab label="Cars "className="nav-menu" />
                <Tab label="Contacts" className="nav-menu"/>
                <Button className="nav-loginbtn">Login</Button>

            </Tabs>
           
            </Toolbar>
      
          </AppBar>
        </React.Fragment>
       
       </Box>
    )
}
export default Newnavbar;