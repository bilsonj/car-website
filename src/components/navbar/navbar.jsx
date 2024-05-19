import React, { useState } from "react";
// import { Button, Typography } from '@mui/material';
import {
  Typography,
  AppBar,
  Toolbar,
  Box,
  Button,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../images-videos/attachment_106965080-removebg-preview.png";
import Modal from "react-modal";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const [login, setlogin] = useState(false);

  const [datas, setdata] = useState({
    email: "",
    password: "",
  });
  const [error, seterror] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setdata({
      ...datas,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("BILSON");
    const validationerrors = {};
    if (!datas.email.trim()) {
      console.log("NNN");
      validationerrors.email = "email is required";
    } else if (!/\S+@\S+\.\S+/.test(datas.email)) {
      validationerrors.email = "email is not required";
      alert("your data successfully submited ");
    }
    if (!datas.password.trim()) {
      validationerrors.password = "password is required";
    } else if (datas.password.length < 6) {
      validationerrors.password = "password should be atleast 6 char";
      alert("your data successfully submited ");
    }
    seterror(validationerrors);
    if (Object.keys(validationerrors).length === 0) {
      alert("your data successfully submited ");
    }
  };
  return (
    <div>
      <Box>
        <AppBar>
          
      
          <Toolbar
           
            sx={{
              background: "#222831",
              color: "#00215E",
              fontWeight: "bold",
              height: "80px",
            }}
          >
            <div className="navbar-1">
            <img className="logo" src={logo} alt="" />
            <Typography variant="h3" className="navbar">
              cars{" "}
            </Typography>
            <MenuIcon className="menuicon"/>
            </div>
            
            {/* <Box className="navbar-overall"> */}
       

            <Box>
              <Box className="arriange-btn">
                <Link to="/">
                  {" "}
                  <Button sx={{ color: "#00ADB5", fontWeight: "bold" }}>
                    Home
                  </Button>
                </Link>
                <Link to="/about">
                  {" "}
                  <Button sx={{ color: "#00ADB5", fontWeight: "bold" }}>
                    About
                  </Button>
                </Link>
                <Link to="/cars">
                  {" "}
                  <Button sx={{ color: "#00ADB5", fontWeight: "bold" }}>
                    cars
                  </Button>
                </Link>
                <Link to="/contacts">
                  {" "}
                  <Button sx={{ color: "#00ADB5", fontWeight: "bold" }}>
                    contacts
                  </Button>
                </Link>
                <Button
                  className="login"
                  sx={{
                    color: "#222831",
                    fontWeight: "bold",
                    background: "#00ADB5",
                  }}
                  onClick={() => setlogin(true)}
                >
                  Login
                </Button>
              </Box>

              <Modal className="logincontiner"  isOpen={login} onRequestClose={()=>setlogin(true)} sx={{}}>
                     
                     <Box component="form" className="loginoverall" onSubmit={handleSubmit}>
                     
                      <h1 className="loginhead">Login</h1>
       
          <TextField className="inputlogin" placeholder="email" onChange={handleChange}>
            {error.name && <span>{error.name}</span>}
            
            </TextField>
            <TextField className="inputlogin" placeholder="password" type="password" onChange={handleChange}>
            {error.name && <span>{error.password}</span>}
            
            </TextField>
          
            <Button className="loginbtn" onClick={handleSubmit}>Login</Button>
            
                      </Box>
                  
        
          
            </Modal>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
export default Navbar;
