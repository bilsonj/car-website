import React, { useRef, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  TextField
} from "@mui/material";
import Navbar from "../navbar/navbar";
import Fooder from "../fooder/fooder";
import bgimg from "../images-videos/bgimg.mp4";
import brand from "../images-videos/brand.jpg"
import "./home.css";
import Modal from "react-modal";
import mahindra from "../images-videos/mahindra.webp";
import toyata from "../images-videos/Toyata.webp";
import tatapunch from "../images-videos/Tatapunch.avif";
import hyundai from "../images-videos/hyundai.jpg";
import mahindra3xo from "../images-videos/Mahindra-3XO-1160x653.webp";
import maruti from "../images-videos/maruti.webp";
import nissan from "../images-videos/nissan magnite.webp";
import kia from "../images-videos/kia seltos.webp";
import jaguar from "../images-videos/jaguar-xf.webp";
import lamborghini from "../images-videos/lamborghini.jpg";
import bugatti from "../images-videos/bugatti.jpg";
import mini from "../images-videos/mini cooper.webp";
import vintage from "../images-videos/vintage.jpg";
import gcm from "../images-videos/gmc.jpg";
import rolls from "../images-videos/rolls royce.webp";
import mitsubishi from "../images-videos/mitsubishi.jpg";
import porsche from "../images-videos/porsche.jpg";
import upcoming from "../images-videos/upcoming-head.jpg";
import hyundailogo from "../images-videos/hundailogo.jpg"
import kialogo from "../images-videos/kialogo.webp";
import volvo from "../images-videos/volvo.jpg";
import marutilogo from "../images-videos/marutilogo.jpg";
import minicooperlogo from "../images-videos/minicooperlogo.jpg";
import tatalogo from "../images-videos/tatalogo.jpg"
import {Link } from "react-router-dom";
import Modals from "../model/modal";
import upcoming1 from "../images-videos/upcoming1.jpg"
import upcoming2 from "../images-videos/upcomingbmwm5.jpg"
import upcoming3 from "../images-videos/upcomingmercedes-benz.webp"
import upcoming4 from "../images-videos/upcomingnissanmaxima.jpg"
import upcoming5 from "../images-videos/upcomingpolestar.jpg"
import upcoming6 from "../images-videos/upcomingramrampage.jpg"
import upcoming7 from "../images-videos/upcomingtata-harrierev.png"
import upcoming8 from "../images-videos/upcomingtoyatamr2.jpg"

<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>;
function Home() {
  const section1 = useRef();

  const section2 = useRef();

  const section3 = useRef();

  const scrolhandler = (elmRef) => {
    window.scrollTo({ top: elmRef.current.offsetTop, behavior: "smooth" });
  };
const [value ,setvalue]=useState(false)
  return (
    <div>
      <Box>
        <Navbar className="" />
      </Box>
      <Box className="videopath">
        <video src={bgimg} autoPlay loop muted />
      </Box>
      <Typography className="features" variant="h4">
        Feature Cars
      </Typography>
      <Box
        className="features-cars"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <Typography className="trenting" onClick={() => scrolhandler(section1)}>
          TRENDING
        </Typography>
        <Typography className="popular" onClick={() => scrolhandler(section2)}>
          POPULAR
        </Typography>
        <Typography className="upcoming" onClick={() => scrolhandler(section3)}>
          UPCOMING
        </Typography>
      </Box>
      <Box
        className="first-continer"
        data-aos="fade-up"
        data-aos-duration="1000"
        ref={section1}
      >
        <Card className="card">
          <CardMedia
            className="media"
            sx={{ height: 140 }}
            image={mahindra}
            title="green iguana"
          />
          <CardContent>
            <Typography variant="h6">Mahindra</Typography>
            <Typography variant="h6">Rs19.99 - 26.30 Lakh*</Typography>
            <Button
              className="cardbtn"
              sx={{ border: "2px solid #00ADB5", loadingPosition: "center" }}
            >
              Check offers
            </Button>
         
          </CardContent>
        </Card>
        <Card className="card">
          <CardMedia
            className="media"
            sx={{ height: 140 }}
            image={toyata}
            title="green iguana"
          />
          <CardContent>
            <Typography variant="h6">Toyata</Typography>
            <Typography variant="h6">Rs19.99 - 26.30 Lakh*</Typography>
            <Button
              className="cardbtn"
              sx={{ border: "2px solid #00ADB5", loadingPosition: "center" }}
            >
              Check offers
            </Button>
          </CardContent>
        </Card>
        <Card className="card">
          <CardMedia
            className="media"
            sx={{ height: 140 }}
            image={tatapunch}
            title="green iguana"
          />
          <CardContent>
            <Typography variant="h6">Tatapunch</Typography>
            <Typography variant="h6">Rs19.99 - 26.30 Lakh*</Typography>
            <Button
              className="cardbtn"
              sx={{ border: "2px solid #00ADB5", loadingPosition: "center" }}
              onClick={()=>setvalue(true)}
            >
              Check offers
            </Button>
            {/* --------------------------modal----------------------------- */}
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
          </CardContent>
        </Card>
        <Card className="card">
          <CardMedia
            className="media"
            sx={{ height: 140 }}
            image={mahindra3xo}
            title="green iguana"
          />
          <CardContent>
            <Typography variant="h6">Mahindra-3XO </Typography>
            <Typography variant="h6">Rs19.99 - 26.30 Lakh*</Typography>
            <Button
              className="cardbtn"
              sx={{ border: "2px solid #00ADB5", loadingPosition: "center" }}
              
            >
              Check offers
            </Button>
          </CardContent>
        </Card>
      </Box>
      <Box
        className="first-continer"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <Card className="card">
          <CardMedia
            className="media"
            sx={{ height: 140 }}
            image={kia}
            title="green iguana"
          />
          <CardContent>
            <Typography variant="h6">Kia seltos</Typography>
            <Typography variant="h6">Rs19.99 - 26.30 Lakh*</Typography>
            <Button
              className="cardbtn"
              sx={{ border: "2px solid #00ADB5", loadingPosition: "center" }}
            >
              Check offers
            </Button>
          </CardContent>
        </Card>
        <Card className="card">
          <CardMedia
            className="media"
            sx={{ height: 140 }}
            image={nissan}
            title="green iguana"
          />
          <CardContent>
            <Typography variant="h6">Nissan magnite</Typography>
            <Typography variant="h6">Rs19.99 - 26.30 Lakh*</Typography>
            <Button
              className="cardbtn"
              sx={{ border: "2px solid #00ADB5", loadingPosition: "center" }}
            >
              Check offers
            </Button>
          </CardContent>
        </Card>
        <Card className="card">
          <CardMedia
            className="media"
            sx={{ height: 140 }}
            image={hyundai}
            title="green iguana"
          />
          <CardContent>
            <Typography variant="h6">Hyundai</Typography>
            <Typography variant="h6">Rs19.99 - 26.30 Lakh*</Typography>
            <Button
              className="cardbtn"
              sx={{ border: "2px solid #00ADB5", loadingPosition: "center" }}
            >
              Check offers
            </Button>
          </CardContent>
        </Card>
        <Card className="card">
          <CardMedia
            className="media"
            sx={{ height: 140 }}
            image={maruti}
            title="green iguana"
          />
          <CardContent>
            <Typography variant="h6">Maruti </Typography>
            <Typography variant="h6">Rs19.99 - 26.30 Lakh*</Typography>
            <Button
              className="cardbtn"
              sx={{ border: "2px solid #00ADB5", loadingPosition: "center" }}
            >
              Check offers
            </Button>
          </CardContent>
        </Card>
      </Box>

      <Box>
        {/* -------------------------------------popular-------------------------------------- */}
        <img src={vintage} className="populat-page" ref={section2} />
        <Typography variant="h3" className="section2">
          Popular Cars
        </Typography>
        <Box
          className="first-continer"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <Card className="card">
            <CardMedia
              className="media"
              sx={{ height: 140 }}
              image={mini}
              title="green iguana"
            />
            <CardContent>
              <Typography variant="h6">Mini Cooper</Typography>
              <Typography variant="h6">Rs19.99 - 26.30 Lakh*</Typography>
              <Button
                className="cardbtn"
                sx={{ border: "2px solid #00ADB5", loadingPosition: "center" }}
              >
                Check offers
              </Button>
            </CardContent>
          </Card>
          <Card className="card">
            <CardMedia
              className="media"
              sx={{ height: 140 }}
              image={bugatti}
              title="green iguana"
            />
            <CardContent>
              <Typography variant="h6">Bugatti</Typography>
              <Typography variant="h6">Rs19.99 - 26.30 Lakh*</Typography>
              <Button
                className="cardbtn"
                sx={{ border: "2px solid #00ADB5", loadingPosition: "center" }}
              >
                Check offers
              </Button>
            </CardContent>
          </Card>
          <Card className="card">
            <CardMedia
              className="media"
              sx={{ height: 140 }}
              image={lamborghini}
              title="green iguana"
            />
            <CardContent>
              <Typography variant="h6">Lamborghini</Typography>
              <Typography variant="h6">Rs19.99 - 26.30 Lakh*</Typography>
              <Button
                className="cardbtn"
                sx={{ border: "2px solid #00ADB5", loadingPosition: "center" }}
              >
                Check offers
              </Button>
            </CardContent>
          </Card>
          <Card className="card">
            <CardMedia
              className="media"
              sx={{ height: 140 }}
              image={jaguar}
              title="green iguana"
            />
            <CardContent>
              <Typography variant="h6"> Jaguar</Typography>
              <Typography variant="h6">Rs19.99 - 26.30 Lakh*</Typography>
              <Button
                className="cardbtn"
                sx={{ border: "2px solid #00ADB5", loadingPosition: "center" }}
              >
                Check offers
              </Button>
            </CardContent>
          </Card>
        </Box>

        <Box
          className="first-continer"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <Card className="card">
            <CardMedia
              className="media"
              sx={{ height: 140 }}
              image={mitsubishi}
              title="green iguana"
            />
            <CardContent>
              <Typography variant="h6">Mitsubishi </Typography>
              <Typography variant="h6">Rs19.99 - 26.30 Lakh*</Typography>
              <Button
                className="cardbtn"
                sx={{ border: "2px solid #00ADB5", loadingPosition: "center" }}
              >
                Check offers
              </Button>
            </CardContent>
          </Card>
          <Card className="card">
            <CardMedia
              className="media"
              sx={{ height: 140 }}
              image={rolls}
              title="green iguana"
            />
            <CardContent>
              <Typography variant="h6">Rolls Royce </Typography>
              <Typography variant="h6">Rs19.99 - 26.30 Lakh*</Typography>
              <Button
                className="cardbtn"
                sx={{ border: "2px solid #00ADB5", loadingPosition: "center" }}
              >
                Check offers
              </Button>
            </CardContent>
          </Card>
          <Card className="card">
            <CardMedia
              className="media"
              sx={{ height: 140 }}
              image={porsche}
              title="green iguana"
            />
            <CardContent>
              <Typography variant="h6">Porsche</Typography>
              <Typography variant="h6">Rs19.99 - 26.30 Lakh*</Typography>
              <Button
                className="cardbtn"
                sx={{ border: "2px solid #00ADB5", loadingPosition: "center" }}
              >
                Check offers
              </Button>
            </CardContent>
          </Card>
          <Card className="card">
            <CardMedia
              className="media"
              sx={{ height: 140 }}
              image={gcm}
              title="green iguana"
            />
            <CardContent>
              <Typography variant="h6">Gcm </Typography>
              <Typography variant="h6">Rs19.99 - 26.30 Lakh*</Typography>
              <Button
                className="cardbtn"
                sx={{ border: "2px solid #00ADB5", loadingPosition: "center" }}
              >
                Check offers
              </Button>
            </CardContent>
          </Card>
        </Box>
        {/* -----------------------upcoming------------------------------------------ */}

        <img className="upcoming-img" src={upcoming} ref={section3} alt="" />
        <Typography className="upcoming-heading" variant="h3">
          Upcoming
        </Typography>
        <Box className="continer3" data-aos="fade-up" data-aos-duration="1000">
          <Card className="card">
            <CardMedia
              className="media"
              sx={{ height: 140 }}
              image={upcoming1}
              title="green iguana"
            />
            <CardContent>
              <Typography variant="h6">Tata Punch </Typography>
              <Typography variant="h6">Rs19.99  Lakh*</Typography>
              <Button
                className="cardbtn"
                sx={{ border: "2px solid #00ADB5", loadingPosition: "center" }}
              >
                Check offers
              </Button>
            </CardContent>
          </Card>

          <Card className="card">
            <CardMedia
              className="media"
              sx={{ height: 140 }}
              image={upcoming2}
              title="green iguana"
            />
            <CardContent>
              <Typography variant="h6">BMW m5 </Typography>
              <Typography variant="h6">Rs 3cr </Typography>
              <Button
                className="cardbtn"
                sx={{ border: "2px solid #00ADB5", loadingPosition: "center" }}
              >
                Check offers
              </Button>
            </CardContent>
          </Card>

          <Card className="card">
            <CardMedia
              className="media"
              sx={{ height: 140 }}
              image={upcoming3}
              title="green iguana"
            />
            <CardContent>
              <Typography variant="h6">Mercedes-benz </Typography>
              <Typography variant="h6">Rs 2cr*</Typography>
              <Button
                className="cardbtn"
                sx={{ border: "2px solid #00ADB5", loadingPosition: "center" }}
              >
                Check offers
              </Button>
            </CardContent>
          </Card>

          <Card className="card">
            <CardMedia
              className="media"
              sx={{ height: 140 }}
              image={upcoming4}
              title="green iguana"
            />
            <CardContent>
              <Typography variant="h6">Nissan Maxima</Typography>
              <Typography variant="h6">Rs19.99 - 26.30 Lakh*</Typography>
              <Button
                className="cardbtn"
                sx={{ border: "2px solid #00ADB5", loadingPosition: "center" }}
              >
                Check offers
              </Button>
            </CardContent>
          </Card>
        </Box>
        <Box className="continer3" data-aos="fade-up" data-aos-duration="1000">
          <Card className="card">
            <CardMedia
              className="media"
              sx={{ height: 140 }}
              image={upcoming5}
              title="green iguana"
            />
            <CardContent>
              <Typography variant="h6">polestar</Typography>
              <Typography variant="h6">Rs 26.30 Lakh*</Typography>
              <Button
                className="cardbtn"
                sx={{ border: "2px solid #00ADB5", loadingPosition: "center" }}
              >
                Check offers
              </Button>
            </CardContent>
          </Card>

          <Card className="card">
            <CardMedia
              className="media"
              sx={{ height: 140 }}
              image={upcoming6}
              title="green iguana"
            />
            <CardContent>
              <Typography variant="h6">Ram Rampage </Typography>
              <Typography variant="h6">Rs 19 Lakh*</Typography>
              <Button
                className="cardbtn"
                sx={{ border: "2px solid #00ADB5", loadingPosition: "center" }}
              >
                Check offers
              </Button>
            </CardContent>
          </Card>

          <Card className="card">
            <CardMedia
              className="media"
              sx={{ height: 140 }}
              image={upcoming7}
              title="green iguana"
            />
            <CardContent>
              <Typography variant="h6">Tata-harrier ev </Typography>
              <Typography variant="h6">Rs 55.20 Lakh*</Typography>
              <Button
                className="cardbtn"
                sx={{ border: "2px solid #00ADB5", loadingPosition: "center" }}
              >
                Check offers
              </Button>
            </CardContent>
          </Card>

          <Card className="card">
            <CardMedia
              className="media"
              sx={{ height: 140 }}
              image={upcoming8}
              title="green iguana"
            />
            <CardContent>
              <Typography variant="h6">Toyato Mr4 </Typography>
              <Typography variant="h6">Rs 20.30 Lakh*</Typography>
              <Button
                className="cardbtn"
                sx={{ border: "2px solid #00ADB5", loadingPosition: "center" }}
              >
                Check offers
              </Button>
            </CardContent> 
          </Card>
        </Box>
        <Box className="allbrands">
          <img className="brand" src={brand} alt="" />
          <Typography className="brand-head" variant="h4">Our Regular Brands</Typography>
<Box className="brand-continer1">
<Link to="/Kiamodel">
<img className="brand-logos" src={kialogo} alt=""  />
</Link>
  <Link to="/volvo" >
    <img className="brand-logos" src={volvo} alt="" />
  </Link>
  <Link to="/hyundaimodel">
  <img className="brand-logos" src={hyundailogo} alt="" />
  </Link>
<Link to="/suzuki">
<img className="brand-logos" src={marutilogo} alt="" />
</Link>
 <Link to="/minicoper">
 <img className="brand-logos" src={minicooperlogo} alt="" />
 </Link>
<Link to="/tata">
<img className="brand-logos" src={tatalogo} alt="" />
</Link>

</Box>


        </Box>
        <Box>
          <Fooder/>
        </Box>
      </Box>

      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      <script>AOS.init();</script>
    </div>
  );
}
export default Home;
