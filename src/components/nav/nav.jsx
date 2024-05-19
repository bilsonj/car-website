import React, { useState } from "react";
import "./nav.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Button ,TextField,Box } from "@mui/material";
import { Link } from "react-router-dom";
import Modal from "react-modal";
function Nav1() {

  const [mobile, setmobile] = useState(false);


  const [value ,setvalue]=useState(false)



  return (
    <div>
      <nav className="navbar1">
        <h2 className="logo1">cars</h2>
        <ul className={mobile ? "nav-links-mobile" : "list-menu"}>
          <Link to="/">
            <li className="home1">Home</li>
          </Link>
          <Link to="/about1">
            <li className="about1">About</li>
          </Link>
          <Link to="/cars1">
            <li className="cars1">Cars</li>
          </Link>
          <Link to="/contacts1">
            <li className="contacts1">Contacts</li>
          </Link>
          <li className="login1"
               onClick={()=>setvalue(true)}
          >Login</li>
        </ul>
           
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

           
        <Button className="mob-menu-icon" onClick={() => setmobile(!mobile)}>
          {mobile ? (
            <CloseIcon className="menu-close-color" />
          ) : (
            <MenuIcon className="menu-color" />
          )}
        </Button>
      </nav>
    </div>
  );
}
export default Nav1;
