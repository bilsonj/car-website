import { Box, Card, Typography, TextField, Button } from "@mui/material";
import React from "react";
import Navbar from "../navbar/navbar";
import "./contacts.css";
import contactshead from "../images-videos/contact-head.jpg";
import HomeIcon from "@mui/icons-material/Home";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";
import Fooder from "../fooder/fooder";
function Contacts() {
  return (
    <Box>
      <Box>
        <Navbar />
      </Box>
      <img className="contactshead" src={contactshead} alt="" />
<Box className="contacts-overall">
      <Box className="contacts-c0ntiner1">
        <Card className="contacts-details">
          <Box className="contacts-address">
            <HomeIcon className="icon" />
          </Box>
          <Box>
            <Typography className="address" variant="h6">
              Address
            </Typography>
            <Typography className="address" variant="p">
              5/3598-1,Yagappanagar, thandacgimadam, rameshwaram
            </Typography>
          </Box>
        </Card>

        <Card className="contacts-details">
          <Box className="contacts-address">
            <PhoneInTalkIcon className="icon" />
          </Box>
          <Box>
            <Typography className="address" variant="h6">
              Phone no
            </Typography>
            <Typography className="address" variant="p">
              8438061570
            </Typography>
          </Box>
        </Card>

        <Card className="contacts-details">
          <Box className="contacts-address">
            <EmailIcon className="icon" />
          </Box>
          <Box>
            <Typography className="address" variant="h6">
              Email
            </Typography>
            <Typography className="address" variant="p">
              bilsonjildas27@gmail.com
            </Typography>
          </Box>
        </Card>
      </Box>

      <Box className="contacts-continer2">
        <TextField className="contacts-fields" placeholder="Name"></TextField>
        <TextField className="contacts-fields" placeholder="Email"></TextField>
        <TextField
          className="contacts-fields"
          placeholder="Subject"
        ></TextField>
        <TextField
          className="contacts-fields"
          placeholder="Message"
        ></TextField>
        <Button className="contact-btn">Supmit</Button>
      </Box>
      </Box>
      <Box>
<Fooder/>
      </Box>
    </Box>
  );
}
export default Contacts;
