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
import { LinkContainer } from "react-router-bootstrap";

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
      <div className="landingPage vignette border-bottom border-warning ">
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
              <LinkContainer to="/SignIn" className="btn btn-outline-warning">
                <Link>SignIn</Link>
              </LinkContainer>
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

      <div className="page-bg">
        <Container
          className="border-lg border-warning"
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <span className="d-block p-2 text-white carousel-head">
            <strong>NEW</strong>
          </span>
          <ShowCarousel showFrom="ctList" label="New" />
        </Container>

        <Container
          className="border-lg border-warning"
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <span className="d-block p-2 text-white carousel-head">
            <strong>POPULAR</strong>
          </span>
          <ShowCarousel showFrom="ctList" label="New" />
        </Container>

        <Container
          className="border-lg border-warning"
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <span className="d-block p-2 text-white carousel-head">
            <strong>RANDOM</strong>
          </span>
          <ShowCarousel showFrom="ctList" />
        </Container>
      </div>
    </>
  );
}

export default Hub;
