import React from "react";
import "./fooder.css"
import { Box ,Typography} from "@mui/material";
import googleplay from "../images-videos/googleplay.png";
import apple from "../images-videos/applenew.png"
function Fooder(){
    return(
        <div className="fooder-overall">
<Box className="fooder-continer">

    <Typography className="fooder-heading" variant="h4">Branches</Typography>
    <Typography className="fooder-content" variant="p">Tata</Typography>
    <Typography className="fooder-content" variant="p">Mahindra</Typography>
    <Typography className="fooder-content" variant="p">Maruti</Typography>
    <Typography className="fooder-content" variant="p">Mini cooper</Typography>

</Box>
<Box className="fooder-continer">

    <Typography className="fooder-heading" variant="h4">Contacts with us</Typography>
    <Typography className="fooder-content" variant="p">Instagram</Typography>
   
    <Typography className="fooder-content" variant="p">Youtupe</Typography>
    <Typography className="fooder-content" variant="p">Whatsapp</Typography>

</Box>
<Box className="fooder-continer">

    <Typography className="fooder-heading" variant="h4">popular cars</Typography>
    <Typography className="fooder-content" variant="p">India</Typography>
    <Typography className="fooder-content" variant="p">Australia</Typography>
    <Typography className="fooder-content" variant="p">England</Typography>
    <Typography className="fooder-content" variant="p">New york</Typography>
    <Box>
    <img  className="fooderimg"src={googleplay} alt="" />
    <img  className="fooderimg2"src={apple} alt="" />
    </Box>

</Box>

        </div>
    )
}
export default Fooder;