import React, { useState } from "react";
import "./modal.css";
import { Box,TextField,Button } from "@mui/material";
import Modal from "react-modal";
function Modals(){

    const [value ,setvalue]=useState(false)
    return(
        <Box>

<Modal className="modeloverall" isOpen={value} onRequestClose={()=>setvalue(true)} sx={{}}>
              <Box className="modelcontiner">
              <h1 className="fields">Enquire now</h1>
              <TextField className="input" placeholder="name">
                
              </TextField>
              <TextField className="input" placeholder="email">
                
                </TextField>
                <Button className="modelbtn" sx={{ border: "2px solid #00ADB5", loadingPosition: "center" }}>Supmit</Button>
              </Box>
         
            </Modal>
        </Box>
    )
}
export default Modals;