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
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Hub from './Page/Homepage';
import SignIn from './Page/Login';
import NavbarMenu from './Page/NavbarMenu';

function App() {
  return (
  
   <BrowserRouter>
      <Navbar bg="dark" variant="dark"> 
        <Navbar.Brand style={{paddingLeft: '360px'}} href="#"><Link to="/">Blockbuster</Link></Navbar.Brand>
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
            <Button variant="outline-warning">All Movie</Button>{' '} 
          </div>
        </Nav>
        <Nav className="justify-content-end">
          <Nav.Link className="pe-5" href="#"><Link to="/SignIn">SignIn</Link></Nav.Link>
        </Nav>
      </Navbar>
      
      <Routes>
        <Route path="/" element={<Hub />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
