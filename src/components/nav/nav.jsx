import React, { useState } from "react";
import "./nav.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
function Nav1() {
  const [mobile, setmobile] = useState(false);
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
          <li className="login1">Login</li>
        </ul>
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
