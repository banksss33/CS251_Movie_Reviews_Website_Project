import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import { Row } from "react-bootstrap";
import "../component/style/Carousel.css";
import ShowCarousel from "../component/componentFile/ShowCarousel";
import { useSpring, animated } from "@react-spring/web";
import Button from "react-bootstrap/Button";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "../component/style/Homepage.css";
import { Link } from "react-router-dom";

function useDelayedOpacity(delay) {
  const animatedProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay,
  });

  return animatedProps;
}

function Hub() {
  const props1 = useDelayedOpacity(400);
  const props2 = useDelayedOpacity(1200);
  const props3 = useDelayedOpacity(1700);
  const props4 = useDelayedOpacity(2000);

  return (
    <>
      <div
        className="vignette border-bottom border-warning "
        style={{
          backgroundImage: `url("https://res.cloudinary.com/drn8zqbqe/image/upload/v1680773820/shutterstock_2141337051_vx8cut.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100vh",
          padding: "5%",
        }}
      >
        <Container
          className="d-flex flex-column justify-content-center align-items-center rounded"
          style={{ width: "100%", height: "100%" }}
        >
          <Row className="mb-5 rounded text-center">
            <animated.div
              style={{
                fontSize: "50px",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                ...props1,
              }}
              className="text-light"
            >
              <strong> Discover and Review Movies </strong>
            </animated.div>
            <animated.div
              style={{
                fontSize: "40px",
                textShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)",
                ...props2,
              }}
              className="text-light"
            >
              with PopcornMeter
            </animated.div>
            <animated.div
              style={{
                fontSize: "40px",

                ...props3,
              }}
              className="text-warning "
            >
              <Button variant="outline-warning"><Link to="/SignIn" style={{textDecoration: "none", color: "#fff"}}>Sign In</Link></Button>
            </animated.div>
            <animated.div
              style={{
                fontSize: "30px",
                textShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)",
                ...props4,
              }}
              className="text-light"
            >
              For rate and write your own review
            </animated.div>
          </Row>
        </Container>
      </div>

      <div
        style={{
          backgroundImage: `url("https://res.cloudinary.com/drn8zqbqe/image/upload/v1680782769/Shutterstock_769937509_1_kkdsii.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          height: "100vh",
          paddingLeft: "9%",
          paddingRight: "9%",
        }}
      >
        <Container
          style={{
            backgroundColor: "#708090",
            width: "100%",
            height: "100%",
            opacity: "0.99",
          }}
        ></Container>
      </div>
    </>
  );
}

export default Hub;
