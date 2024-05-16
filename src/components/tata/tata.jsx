import { Box } from "@mui/material";
import React from "react";
import Navbar from "../navbar/navbar";
import tata1 from "../images-videos/tata.webp"
import tata2 from "../images-videos/tata1.jpg"
import tata3 from "../images-videos/tata2.webp"
import tata4 from "../images-videos/tata4.jpg"
import tata5 from "../images-videos/tata5.avif"
import tata6 from "../images-videos/Tatapunch.avif"


import "./tata.css"
import Fooder from "../fooder/fooder";
function Tata(){
    return(
        <Box>
            <Box>
<Navbar/>
            </Box>
<Box className="tata-overall">
<img className="tata-design" src={tata1} alt="" />
<img className="tata-design" src={tata2} alt="" />
<img className="tata-design" src={tata3} alt="" />
</Box>
<Box className="tata-overall">
<img className="tata-design" src={tata4} alt="" />
<img className="tata-design" src={tata5} alt="" />
<img className="tata-design" src={tata6} alt="" />
</Box>
<Box>
    <Fooder/>
</Box>
        </Box>

    )
}
export default Tata;