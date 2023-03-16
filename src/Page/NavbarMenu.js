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

function NavbarMenu() {
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
            <Button variant="outline-warning">All Movie</Button>{' '} 
          </div>
        </Nav>
        <Nav className="justify-content-end">
          <Nav.Link className="pe-5" href="#">Sign in</Nav.Link>
        </Nav>
      </Navbar>
      
      </div>

  );
}

export default NavbarMenu;
