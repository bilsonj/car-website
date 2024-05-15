import React, { useRef } from "react";
import Navbar from "../navbar/navbar";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import Fooder from "../fooder/fooder";
import carshead1 from "../images-videos/carshead1.jpg";
import carpage1 from "../images-videos/carpage1.jpg";
import carpage2 from "../images-videos/carpage2.webp";
import carpage3 from "../images-videos/carpage3.jpg";
import carpage4 from "../images-videos/carspage4.jpg";
import carpage5 from "../images-videos/carspage5.jpg";
import carpage6 from "../images-videos/carpage6.webp";
import carpage7 from "../images-videos/carpage7.webp";
import carpage8 from "../images-videos/carpage8.jpg";
import carpage9 from "../images-videos/carpage9.jpg";
import carpage10 from "../images-videos/carpage10.jpg";
import carpage11 from "../images-videos/carpage11.webp";
import carpage12 from "../images-videos/carpage12.avif";
import carpage13 from "../images-videos/carpage13.jpg";
import carpage14 from "../images-videos/carpage14.jpg";
import carpage15 from "../images-videos/carpage15.jpg";
import carpage16 from "../images-videos/carpage16.avif";
import "./car.css";
function Cars() {

    const first1 = useRef();

    const first2 = useRef();
  
    const first3 = useRef();
    
    const first4 = useRef();

    const scrolhandler = (elmRef) => {
        window.scrollTo({ top: elmRef.current.offsetTop, behavior: "smooth" });
      }
  return (
    <Box>
      <Box>
        <Navbar />
      </Box>
      <img className="carshead1" src={carshead1} alt="" />
      <Typography className="carchoose" variant="h4">
        Choose your car
      </Typography>
      <Box className="carpage-overall"
       data-aos="fade-up"
       data-aos-duration="1000"
       ref={first1}>
        <Card className="cars-design">
          <CardMedia sx={{ height: 140 }} image={carpage1} />
          <CardContent className=" cars-contentpage">
            <Typography variant="h6">Maruti-Suzuki</Typography>
            <Typography variant="h6">Rs 3.99 Lakh</Typography>
            <Button
              className="cars-buttonpage"
              sx={{ border: "2px solid #00ADB5", loadingPosition: "center" }}
            >
              Buy now
            </Button>
          </CardContent>
        </Card>
        <Card className="cars-design">
          <CardMedia sx={{ height: 140 }} image={carpage4} />
          <CardContent className=" cars-contentpage">
            <Typography variant="h6">Audi</Typography>
            <Typography variant="h6">Rs. 45.34 Lakh</Typography>
            <Button
              className="cars-buttonpage"
              sx={{ border: "2px solid #00ADB5", loadingPosition: "center" }}
            >
              Buy now
            </Button>
          </CardContent>
        </Card>
        <Card className="cars-design">
          <CardMedia sx={{ height: 140 }} image={carpage3} />
          <CardContent className=" cars-contentpage">
            <Typography variant="h6">Toyota</Typography>
            <Typography variant="h6">Rs 6.86 Lakh</Typography>
            <Button
              className="cars-buttonpage"
              sx={{ border: "2px solid #00ADB5", loadingPosition: "center" }}
            >
              Buy now
            </Button>
          </CardContent>
        </Card>
        <Card className="cars-design">
          <CardMedia sx={{ height: 140 }} image={carpage2} />
          <CardContent className=" cars-contentpage">
            <Typography variant="h6">BMW</Typography>
            <Typography variant="h6">Rs. 45.34 Lakh</Typography>
            <Button
              className="cars-buttonpage"
              sx={{ border: "2px solid #00ADB5", loadingPosition: "center" }}
            >
              Buy now
            </Button>
          </CardContent>
        </Card>
      </Box>


      <Box className="carpage-overall"
        data-aos="fade-up"
        data-aos-duration="1000"
        ref={first2}>
        <Card className="cars-design">
          <CardMedia sx={{ height: 140 }} image={carpage8} />
          <CardContent className=" cars-contentpage">
            <Typography variant="h6">Lexus</Typography>
            <Typography variant="h6">Rs. 63.10 Lakh</Typography>
            <Button
              className="cars-buttonpage"
              sx={{ border: "2px solid #00ADB5", loadingPosition: "center" }}
            >
              Buy now
            </Button>
          </CardContent>
        </Card>
        <Card className="cars-design">
          <CardMedia sx={{ height: 140 }} image={carpage5} />
          <CardContent className=" cars-contentpage">
            <Typography variant="h6">Tata</Typography>
            <Typography variant="h6">Rs. 5 Lakh</Typography>
            <Button
              className="cars-buttonpage"
              sx={{ border: "2px solid #00ADB5", loadingPosition: "center" }}
            >
              Buy now
            </Button>
          </CardContent>
        </Card>
        <Card className="cars-design">
          <CardMedia sx={{ height: 140 }} image={carpage6} />
          <CardContent className=" cars-contentpage">
            <Typography variant="h6">Chevrolet</Typography>
            <Typography variant="h6">Rs 7 Lakh</Typography>
            <Button
              className="cars-buttonpage"
              sx={{ border: "2px solid #00ADB5", loadingPosition: "center" }}
            >
              Buy now
            </Button>
          </CardContent>
        </Card>
        <Card className="cars-design">
          <CardMedia sx={{ height: 140 }} image={carpage7} />
          <CardContent className=" cars-contentpage">
            <Typography variant="h6">Pajero</Typography>
            <Typography variant="h6">Rs. 40 Lakh</Typography>
            <Button
              className="cars-buttonpage"
              sx={{ border: "2px solid #00ADB5", loadingPosition: "center" }}
            >
              Buy now
            </Button>
          </CardContent>
        </Card>
      </Box>


      <Box className="carpage-overall"
        data-aos="fade-up"
        data-aos-duration="1000"
        ref={first3}>
        <Card className="cars-design">
          <CardMedia sx={{ height: 140 }} image={carpage9} />
          <CardContent className=" cars-contentpage">
            <Typography variant="h6">GAC</Typography>
            <Typography variant="h6">Rs. 60.10 Lakh</Typography>
            <Button
              className="cars-buttonpage"
              sx={{ border: "2px solid #00ADB5", loadingPosition: "center" }}
            >
              Buy now
            </Button>
          </CardContent>
        </Card>
        <Card className="cars-design">
          <CardMedia sx={{ height: 140 }} image={carpage10} />
          <CardContent className=" cars-contentpage">
            <Typography variant="h6">Jaguar</Typography>
            <Typography variant="h6">Rs. 65 Lakh</Typography>
            <Button
              className="cars-buttonpage"
              sx={{ border: "2px solid #00ADB5", loadingPosition: "center" }}
            >
              Buy now
            </Button>
          </CardContent>
        </Card>
        <Card className="cars-design">
          <CardMedia sx={{ height: 140 }} image={carpage11} />
          <CardContent className=" cars-contentpage">
            <Typography variant="h6">Ford</Typography>
            <Typography variant="h6">Rs 10 Lakh</Typography>
            <Button
              className="cars-buttonpage"
              sx={{ border: "2px solid #00ADB5", loadingPosition: "center" }}
            >
              Buy now
            </Button>
          </CardContent>
        </Card>
        <Card className="cars-design">
          <CardMedia sx={{ height: 140 }} image={carpage12} />
          <CardContent className=" cars-contentpage">
            <Typography variant="h6">Range Rover</Typography>
            <Typography variant="h6">Rs. 45 Lakh</Typography>
            <Button
              className="cars-buttonpage"
              sx={{ border: "2px solid #00ADB5", loadingPosition: "center" }}
            >
              Buy now
            </Button>
          </CardContent>
        </Card>
      </Box>


      <Box className="carpage-overall"
        data-aos="fade-up"
        data-aos-duration="1000"
        ref={first4}>
        <Card className="cars-design">
          <CardMedia sx={{ height: 140 }} image={carpage13} />
          <CardContent className=" cars-contentpage">
            <Typography variant="h6">Aston Martin</Typography>
            <Typography variant="h6">Rs. 60 Lakh</Typography>
            <Button
              className="cars-buttonpage"
              sx={{ border: "2px solid #00ADB5", loadingPosition: "center" }}
            >
              Buy now
            </Button>
          </CardContent>
        </Card>
        <Card className="cars-design">
          <CardMedia sx={{ height: 140 }} image={carpage14} />
          <CardContent className=" cars-contentpage">
            <Typography variant="h6">Bentley</Typography>
            <Typography variant="h6">Rs. 63 Lakh</Typography>
            <Button
              className="cars-buttonpage"
              sx={{ border: "2px solid #00ADB5", loadingPosition: "center" }}
            >
              Buy now
            </Button>
          </CardContent>
        </Card>
        <Card className="cars-design">
          <CardMedia sx={{ height: 140 }} image={carpage15} />
          <CardContent className=" cars-contentpage">
            <Typography variant="h6">Great Wall</Typography>
            <Typography variant="h6">Rs 30 Lakh</Typography>
            <Button
              className="cars-buttonpage"
              sx={{ border: "2px solid #00ADB5", loadingPosition: "center" }}
            >
              Buy now
            </Button>
          </CardContent>
        </Card>
        <Card className="cars-design">
          <CardMedia sx={{ height: 140 }} image={carpage16} />
          <CardContent className=" cars-contentpage">
            <Typography variant="h6">Dodge</Typography>
            <Typography variant="h6">Rs. 50 Lakh</Typography>
            <Button
              className="cars-buttonpage"
              sx={{ border: "2px solid #00ADB5", loadingPosition: "center" }}
            >
              Buy now
            </Button>
          </CardContent>
        </Card>
      </Box>
      <Box>
<Fooder/>
      </Box>
    </Box>
  );
}
export default Cars;
