import { Box } from "@mui/material";
import React from "react";
import Navbar from "../navbar/navbar";
import Minicoper1 from "../images-videos/minicoper1.webp"
import Minicoper2 from "../images-videos/minicoper2.jpg"
import Minicoper3 from "../images-videos/minicoper3.webp"
import Minicoper4 from "../images-videos/minicoper4.jpg"
import Minicoper5 from "../images-videos/minicoper5.jpg"
import Minicoper6 from "../images-videos/minicoper6.webp"


import "./minicoper.css"
import Fooder from "../fooder/fooder";
function Minicoper(){
    return(
        <Box>
            <Box>
<Navbar/>
            </Box>
<Box className="minicoper-overall">
<img className="mini-design" src={Minicoper1} alt="" />
<img className="mini-design" src={Minicoper2} alt="" />
<img className="mini-design" src={Minicoper3} alt="" />
</Box>
<Box className="minicoper-overall">
<img className="mini-design" src={Minicoper4} alt="" />
<img className="mini-design" src={Minicoper5} alt="" />
<img className="mini-design" src={Minicoper6} alt="" />
</Box>
<Box>
    <Fooder/>
</Box>
        </Box>

    )
}
export default Minicoper;