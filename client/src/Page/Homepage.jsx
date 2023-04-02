import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import { Row } from "react-bootstrap";
import "../component/style/Carousel.css";
import ShowCarousel from "../component/componentFile/ShowCarousel";

function Hub() {
  return (
    <body
      style={{
        backgroundColor: "rgb(0,22,22)",
        padding: "100px 125px",
      }}
      className="d-flex"
    >
      <Container
        style={{
          backgroundColor: "rgb(0,22,22)",
        }}
        className="p-3"
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
    </body>
  );
}

export default Hub;
