import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import { Row } from "react-bootstrap";

const newItem = [
  //New Movie data that pass to carousel
  {
    id: 1,
    image:
      "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C8FB90AA53A8A57DE288B1FA92E740DC1BD8003D8898E3C2557413129FD4822D/scale?width=1200&aspectRatio=1.78&format=jpeg",
    chead: "Ant-Man and the Wasp: Quantumania",
    desc: "Ant-Man and the Wasp find themselves exploring the Quantum , interacting with strange new creatures and embarking on an adventure that pushes them beyond the limits of what they thought was possible.",
  },
  {
    id: 2,
    image: "https://markpeak.net/wp-content/uploads/2022/03/shawshank.jpg",
    chead: "Ant-Man and the Wasp: Quantumania",
    desc: "Ant-Man and the Wasp find themselves exploring the Quantum , interacting with strange new creatures and embarking on an adventure that pushes them beyond the limits of what they thought was possible.",
  },
  {
    id: 3,
    image:
      "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C8FB90AA53A8A57DE288B1FA92E740DC1BD8003D8898E3C2557413129FD4822D/scale?width=1200&aspectRatio=1.78&format=jpeg",
    chead: "Ant-Man and the Wasp: Quantumania",
    desc: "Ant-Man and the Wasp find themselves exploring the Quantum , interacting with strange new creatures and embarking on an adventure that pushes them beyond the limits of what they thought was possible.",
  },
];

const popuItem = [
  //Popular Movie data that pass to carousel
  {
    id: 1,
    image:
      "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C8FB90AA53A8A57DE288B1FA92E740DC1BD8003D8898E3C2557413129FD4822D/scale?width=1200&aspectRatio=1.78&format=jpeg",
    chead: "Ant-Man and the Wasp: Quantumania",
    desc: "Ant-Man and the Wasp find themselves exploring the Quantum , interacting with strange new creatures and embarking on an adventure that pushes them beyond the limits of what they thought was possible.",
  },
  {
    id: 2,
    image:
      "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C8FB90AA53A8A57DE288B1FA92E740DC1BD8003D8898E3C2557413129FD4822D/scale?width=1200&aspectRatio=1.78&format=jpeg",
    chead: "Ant-Man and the Wasp: Quantumania",
    desc: "Ant-Man and the Wasp find themselves exploring the Quantum , interacting with strange new creatures and embarking on an adventure that pushes them beyond the limits of what they thought was possible.",
  },
  {
    id: 3,
    image:
      "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C8FB90AA53A8A57DE288B1FA92E740DC1BD8003D8898E3C2557413129FD4822D/scale?width=1200&aspectRatio=1.78&format=jpeg",
    chead: "Ant-Man and the Wasp: Quantumania",
    desc: "Ant-Man and the Wasp find themselves exploring the Quantum , interacting with strange new creatures and embarking on an adventure that pushes them beyond the limits of what they thought was possible.",
  },
];

function Hub() {
  return (
    <div
      style={{
        backgroundColor: "rgb(0,22,22)",
        padding: "100px 125px",
      }}
      className="d-flex"
    >
      <Container>
        {" "}
        {/* Container1 */}
        <Row>
          {" "}
          {/* Container2 */}
          <span class="d-block p-2 bg-dark text-white">
            <h1>New</h1>
          </span>{" "}
          {/* Container3 */}
          <Carousel fade>
            {newItem.map((MItems) => (
              <Carousel.Item key={MItems.id}>
                <img
                  className="d-block w-100 rounded-5"
                  src={MItems.image}
                  alt="Data not found!"
                />
                <Carousel.Caption>
                  <h3>{MItems.chead}</h3>
                  <p>{MItems.desc}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Row>{" "}
        {/*Popular*/}
        <Row className="mt-5">
          {/* Container2 */}
          <span class="d-block p-2 bg-dark text-white">
            <h1>Popular</h1>
          </span>
          {/* Container3 */}
          <Carousel fade>
            {popuItem.map((popuItems) => (
              <Carousel.Item key={popuItems.id}>
                <img
                  className="d-block w-100 rounded-5"
                  src={popuItems.image}
                  alt="Data not found!"
                />
                <Carousel.Caption>
                  <h3>{popuItems.chead}</h3>
                  <p>{popuItems.desc}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Row>
      </Container>
    </div>
  );
}

export default Hub;
