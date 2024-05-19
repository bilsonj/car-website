import { Box } from "@mui/material";
import React from "react";
import Nav1 from "../nav/nav";
import Hyundai1 from "../images-videos/hyundai.jpg"
import Hyundai2 from "../images-videos/hyundai2.webp"
import Hyundai3 from "../images-videos/hyundai3.jpg"
import Hyundai4 from "../images-videos/hyundai4.webp"
import Hyundai5 from "../images-videos/hyundai5.jpg"
import Hyundai6 from "../images-videos/hyundai6.webp"
import "./hyundai.css"
import Fooder from "../fooder/fooder";
function Hyundaimodel(){
    return(
        <Box>
            <Box>
<Nav1/>
            </Box>
<Box className="hyundai-overall">
<img className="huandai-design" src={Hyundai1} alt="" />
<img className="huandai-design" src={Hyundai2} alt="" />
<img className="huandai-design" src={Hyundai3} alt="" />
</Box>
<Box className="hyundai-overall">
<img className="huandai-design" src={Hyundai4} alt="" />
<img className="huandai-design" src={Hyundai5} alt="" />
<img className="huandai-design" src={Hyundai6} alt="" />
</Box>
<Box>
    <Fooder/>
</Box>
        </Box>

    )
}
export default Hyundaimodel;