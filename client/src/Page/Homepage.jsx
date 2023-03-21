import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import { Row } from "react-bootstrap";
import "../component/Carousel.css";

const newItem = [
  //New Movie data that pass to carousel
  {
    id: 1,
    image:
      "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202211/avatar-_the_way_of_water-sixteen_nine.jpeg?size=948:533",
    chead: "Avatar: The Way of Water",
    desc: "Set more than a decade after the events of the first film, “Avatar: The Way of Water” begins to tell the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe",
  },
  {
    id: 2,
    image:
      "https://media.npr.org/assets/img/2023/01/11/bella-ramsey-anna-torv---liane-hentscher_hbo_wide-65eb226b4c1775bfbedf0d302d4785085ca62ef7-s1400-c100.jpg",
    chead: "The Last of Us",
    desc: "Tasked with escorting a teenager across a post-apocalyptic world, a dreaded smuggler joins hands with a young apprentice to fulfil the mission unscathed",
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
    image: "https://markpeak.net/wp-content/uploads/2022/03/shawshank.jpg",
    chead: "The Shawshank Redemption",
    desc: "Andy Dufresne, a successful banker, is arrested for the murders of his wife and her lover, and is sentenced to life imprisonment at the Shawshank prison. He becomes the most unconventional prisoner.",
  },
  {
    id: 2,
    image: "https://ntvb.tmsimg.com/assets/p6326_v_h8_be.jpg?w=960&h=540",
    chead: "The Godfather",
    desc: "Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.",
  },
  {
    id: 3,
    image: "https://i.ytimg.com/vi/isOGD_7hNIY/maxresdefault.jpg",
    chead: "Parasite",
    desc: "The struggling Kim family sees an opportunity when the son starts working for the wealthy Park family. Soon, all of them find a way to work within the same household and start living a parasitic life.",
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
          <span className="d-inline p-2 mb-4 text-white border-start border-warning">
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
