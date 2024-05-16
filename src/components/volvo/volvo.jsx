import { Box } from "@mui/material";
import React from "react";
import Navbar from "../navbar/navbar";
import volvo1 from "../images-videos/volvo1.webp"
import volvo2 from "../images-videos/volvo2.jpg"
import volvo3 from "../images-videos/volvo3.jpg"
import volvo4 from "../images-videos/volvo4.webp"
import volvo5 from "../images-videos/volvo5.webp"
import volvo6 from "../images-videos/volvo6.webp"
import "./volvo.css"
import Fooder from "../fooder/fooder";
function Volvo(){
    return(
        <Box>
            <Box>
<Navbar/>
            </Box>
            <Box className="volvo-overall">
<img className="volvo-design" src={volvo1} alt="" />
<img className="volvo-design" src={volvo2} alt="" />
<img className="volvo-design" src={volvo3} alt="" />
            </Box>

            <Box className="volvo-overall">
<img className="volvo-design" src={volvo4} alt="" />
<img className="volvo-design" src={volvo5} alt="" />
<img className="volvo-design" src={volvo6} alt="" />
            </Box>
            <Box>
                <Fooder/>
            </Box>
        </Box>
    )
}
export default Volvo;