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

  return (
    <>
      <div
        className="vignette border-bottom border-warning "
        style={{
          zIndex: "1",
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
              <Button variant="outline-warning"> Sign Up</Button>
            </animated.div>
          </Row>
        </Container>
      </div>

      <div
        style={{
          zIndex: "-1",
          width: "100%",
          height: "100%",
          paddingLeft: "10%",
          paddingRight: "10%",
        }}
      >
        <Container
          style={{
            backgroundColor: "#51484f",
            width: "100%",
            height: "100%",
          }}
        >
          {" "}
          {/* Container1 */}
          <Row>
            {" "}
            {/* Container2 */}
            <span className="d-inline p-2 mb-4 text-white border-start border-warning">
              <h1>New</h1>
            </span>{" "}
            {/* Container3 */}
            <ShowCarousel showFrom="NewMovie" />
          </Row>{" "}
          {/*Popular*/}
          <Row className="mt-5">
            {/* Container2 */}
            <span className="d-inline p-2 mb-4 text-white border-start border-warning">
              <h1>Popular</h1>
            </span>
            {/* Container3 */}
            <ShowCarousel showFrom="ctList" />
          </Row>
          {/*Popular*/}
          <Row className="mt-5">
            {/* Container2 */}
            <span className="d-inline p-2 mb-4 text-white border-start border-warning">
              <h1>Random</h1>
            </span>
            {/* Container3 */}
            <ShowCarousel showFrom="RandMovie" />
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Hub;
