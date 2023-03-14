import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import InputGroup from 'react-bootstrap/InputGroup';
import Carousel from 'react-bootstrap/Carousel';

function App() {
  return (
  
      <div style={{
        backgroundColor: 'rgb(0,22,22)'
        }}>

      <Navbar bg="dark" variant="dark"> 
        <Navbar.Brand style={{paddingLeft: '360px'}} href="#">Blockbuster</Navbar.Brand>
        <Nav className="me-auto">
          <InputGroup className="ps-3">
            <DropdownButton variant="outline-warning" title="Search" bid="input-group-dropdown-1" >
              <Dropdown.Item href="#">Actor</Dropdown.Item>
              <Dropdown.Item href="#">Movie</Dropdown.Item>
              <Dropdown.Item href="#">TV Series</Dropdown.Item>
            </DropdownButton>
          <Form.Control aria-label="Search input"/>
        </InputGroup>

          <div className="ps-5" href="#"> 
            <Button variant="outline-warning">Review</Button>{' '} 
          </div>
        </Nav>
        <Nav className="justify-content-end">
          <Nav.Link className="pe-5" href="#">Sign in</Nav.Link>
        </Nav>
      </Navbar>

      <Container style={{ 
        padding: '100px 120px'
      }}> {/* Container1 */}
      
        <Container> {/* Container2 */}
        <span class="d-block p-2 bg-dark text-white"><h1>New</h1></span>
          <Container> {/* Container3 */}
          <Carousel className="rounded-5 shadow-4-strong">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C8FB90AA53A8A57DE288B1FA92E740DC1BD8003D8898E3C2557413129FD4822D/scale?width=1200&aspectRatio=1.78&format=jpeg"
                alt=""
              />
              <Carousel.Caption>
                <h3>Ant-Man and the Wasp: Quantumania</h3>
                <p>Ant-Man and the Wasp find themselves exploring the Quantum Realm, 
                  interacting with strange new creatures and embarking on an adventure that pushes 
                  them beyond the limits of what they thought was possible.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202211/avatar-_the_way_of_water-sixteen_nine.jpeg?size=948:533"
                alt=""
              />
              <Carousel.Caption>
                <h3>Avatar: The Way of Water</h3>
                <p>Set more than a decade after the events of the first film, “Avatar: The Way of Water” begins to tell the story of the Sully family (Jake, Neytiri, and their kids), 
                  the trouble that follows them, the lengths they go to keep each other safe</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://media.npr.org/assets/img/2023/01/11/bella-ramsey-anna-torv---liane-hentscher_hbo_wide-65eb226b4c1775bfbedf0d302d4785085ca62ef7-s1400-c100.jpg"
                alt=""
              />
              <Carousel.Caption>
                <h3>The Last of Us</h3>
                <p>Tasked with escorting a teenager across a post-apocalyptic world, 
                  a dreaded smuggler joins hands with a young apprentice 
                  to fulfil the mission unscathed.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          </Container>
        </Container>

        {/*Popular*/}
        <Container className="mt-5"> {/* Container2 */}
        <span class="d-block p-2 bg-dark text-white"><h1>Popular</h1></span>
          <Container> {/* Container3 */}
          <Carousel className="rounded-5 shadow-4-strong">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://markpeak.net/wp-content/uploads/2022/03/shawshank.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>The Shawshank Redemption</h3>
                <p>Andy Dufresne, a successful banker, is arrested for the murders of his wife and her lover, 
                  and is sentenced to life imprisonment at the Shawshank prison. 
                  He becomes the most unconventional prisoner.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://ntvb.tmsimg.com/assets/p6326_v_h8_be.jpg?w=960&h=540"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>The Godfather</h3>
                <p>Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, 
                  his decision unintentionally puts the lives of his loved ones in grave danger.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://i.ytimg.com/vi/isOGD_7hNIY/maxresdefault.jpg"
              />
              <Carousel.Caption>
                <h3>Parasite</h3>
                <p>The struggling Kim family sees an opportunity when the son starts working for the wealthy Park family. 
                  Soon, all of them find a way to work within the same household and start living a parasitic life.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202211/avatar-_the_way_of_water-sixteen_nine.jpeg?size=948:533"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Avatar: The Way of Water</h3>
                <p>Set more than a decade after the events of the first film, “Avatar: The Way of Water” begins to tell the story of the Sully family (Jake, Neytiri, and their kids), 
                  the trouble that follows them, the lengths they go to keep each other safe</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          </Container>
        </Container>
      </Container>      
    
      </div>

  );
}

export default App;
