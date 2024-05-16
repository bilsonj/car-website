import { Box } from "@mui/material";
import React from "react";
import Navbar from "../navbar/navbar";
import Susuki1 from "../images-videos/suzuki1.webp"
import Susuki2 from "../images-videos/suzuki2.avif"
import Susuki3 from "../images-videos/suzuki4.jpg"
import Susuki4 from "../images-videos/suzuki5.avif"
import Susuki5 from "../images-videos/maruti.webp"
import Susuki6 from "../images-videos/suzuki6.webp"

import "./suziki.css"
import Fooder from "../fooder/fooder";
function Suzuki(){
    return(
        <Box>
            <Box>
<Navbar/>
            </Box>
<Box className="suzuki-overall">
<img className="suzuki-design" src={Susuki1} alt="" />
<img className="suzuki-design" src={Susuki2} alt="" />
<img className="suzuki-design" src={Susuki3} alt="" />
</Box>
<Box className="suzuki-overall">
<img className="suzuki-design" src={Susuki4} alt="" />
<img className="suzuki-design" src={Susuki5} alt="" />
<img className="suzuki-design" src={Susuki6} alt="" />
</Box>
<Box>
    <Fooder/>
</Box>
        </Box>

    )
}
export default Suzuki;