import React, { useRef } from "react";
import Nav1 from "../nav/nav";
import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";
import "./about.css";
import aboutmp4 from "../images-videos/about.mp4";
import aboutposition from "../images-videos/aboutposition.jpg";
import bilson from "../images-videos/billu.jpg";
import jilson from "../images-videos/jilson.jpg";
import sri from "../images-videos/sri.jpg"
import Fooder from "../fooder/fooder";
function About() {

  const part1 = useRef();

  const part2 = useRef();

  const part3 = useRef();
  const scrolhandler = (elmRef) => {
    window.scrollTo({ top: elmRef.current.offsetTop, behavior: "smooth" });
  }
  return (
    <Box>
      <Box>
        <Nav1 />
      </Box>
      <video className="aboutmp4" src={aboutmp4} muted loop autoPlay>
        {" "}
      </video>

      <Box className="about-content-overall">
        <Box className="about-continer1">
          <img className="aboutposition" src={aboutposition} alt="" />
        </Box>
        <Box className="about-continer2">
          <Typography className="about-head" variant="h4">
            About us
          </Typography>
          <Typography className="about-para" variant="p">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth. On her way she met a
            copy. The copy warned the Little Blind Text, that where it came from
            it would have been rewritten a thousand times and everything that
            was left from its origin would be the word "and" and the Little
            Blind Text should turn around and return to its own, safe country. A
            small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </Typography>
        </Box>
      </Box>

      <Box>
        {/* <img className="aboutposition" src={aboutposition} alt="" /> */}
      </Box>
      <Box>
        <Typography className="happy" variant="h4">
          Happy Clients
        </Typography>
        <Box className="aboutcards">

        <Box className="image-continer"
                data-aos="fade-up"
                data-aos-duration="1000"
                ref={part1}>
          <Card className="about-card">
            <CardMedia
              className="billu"
              sx={{ height: 140, width: 140 }}
              image={bilson}
            />
            <CardContent>
              <Typography variant="p">
                the Little Blind Text should turn around and return to its own,
                safe country.
              </Typography>
              <Typography variant="h5" className="about-name">Bilson</Typography>
              <Typography className="developer">Frontend Developer</Typography>
            </CardContent>
          </Card>
          
        </Box>
        <Box className="image-continer"
           data-aos="fade-up"
           data-aos-duration="1000"
           ref={part2}>
          <Card className="about-card">
            <CardMedia
              className="billu"
              sx={{ height: 140, width: 140 }}
              image={sri}
            />
            <CardContent>
              <Typography variant="p">
                the Little Blind Text should turn around and return to its own,
                safe country.
              </Typography>
              <Typography variant="h5" className="about-name">Srikaran</Typography>
              <Typography className="developer">Data Analyst</Typography>
            </CardContent>
          </Card>
          
        </Box>
        <Box className="image-continer"
           data-aos="fade-up"
           data-aos-duration="1000"
           ref={part3}>
          <Card className="about-card">
            <CardMedia
              className="billu"
              sx={{ height: 140, width: 140 }}
              image={jilson}
            />
            <CardContent>
              <Typography variant="p">
                the Little Blind Text should turn around and return to its own,
                safe country.
              </Typography>
              <Typography variant="h5" className="about-name">Jilson</Typography>
              <Typography className="developer">Backend Developer</Typography>
            </CardContent>
          </Card>
          
        </Box>
        </Box>
        </Box>
        
        <Box>
<Fooder/>
        </Box>
     
    </Box>
  );
}
export default About;
