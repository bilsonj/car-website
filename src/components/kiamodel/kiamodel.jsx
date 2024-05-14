import React from "react";
import Navbar from "../navbar/navbar";
import Fooder from "../fooder/fooder";
import { Box } from "@mui/material";
import Kiamodel1 from "../images-videos/kiamodel1.webp";
import Kiamodel2 from "../images-videos/kiamodel2.jpg";
import Kiamodel3 from '../images-videos/kia carnival.webp'
import "./kiamodel.css";
import Kiamodel4 from "../images-videos/kia model3.avif";
import Kiamodel5 from "../images-videos/kia ev5 - Copy.webp"
import Kiamodel6 from "../images-videos/kia clavis .webp"



function Kiamodel () {
    return(
<div>
    <Box >
<Navbar/>
    </Box>
    <Box className="kia-page">
<img className="kia-imgs" src={Kiamodel1} alt="" />
<img  className="kia-imgs" src={Kiamodel2} alt="" />
<img  className="kia-imgs" src={Kiamodel3} alt="" />
    </Box>
    
    <Box className="kia-page">
<img className="kia-imgs" src={Kiamodel5} alt="" />
<img  className="kia-imgs" src={Kiamodel4} alt="" />
<img  className="kia-imgs" src={Kiamodel6} alt="" />
    </Box>
    <Box>
<Fooder/>
    </Box>
</div>
    )
}
export default Kiamodel;