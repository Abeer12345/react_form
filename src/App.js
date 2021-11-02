import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { NavDropdown, Offcanvas, Nav, FormControl } from 'react-bootstrap';
import { Button, Form, Row, Input, Container } from 'reactstrap';

function App() {
  return (
    <div className="App">

      <Navbar bg="light" expand={false} >
        <Container fluid>
          <Navbar.Brand href="#"><b >MY TOYS</b></Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">shopping cart</Nav.Link>
                {/* <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown> */}
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>

        </Container>
      </Navbar>


      <Form>
        <div class="div-form">

          <Row>
            <div class="form-group col-md-6">
              <label for="inputEmail4"></label>
              <Input type="text" class="form-control" id="id_name" placeholder="First name" aria-label="First name" />
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4"></label>
              <Input type="text" class="form-control" id="id_name" placeholder="Last name" aria-label="Last name" />
            </div>
          </Row>

          <Row>
            <div class="form-group col-md-6">
              <label for="inputEmail4"></label>
              <Input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4"></label>
              <Input type="password" class="form-control" id="inputPassword4" placeholder="Password" />
            </div>
          </Row>

          <Row>
            <div class="form-group col-md-6" >
              <label for="inputAddress"></label>
              <Input type="text" class="form-control" id="inputAddress" placeholder="Adresse" />
            </div>
            <div class="form-group col-md-6">
              <label for="inputState"></label>
              <select id="inputState" class="form-control">
                <option selected>Choose city</option>
                <option>Tunis</option>
                <option>Monastir</option>
                <option>Sousse</option>
                <option>Mahdia</option>
                <option>Sfax</option>
                <option>Gabes</option>
              </select>
            </div>
          </Row>

          <br />
          <button type="submit" class="btn btn-primary">Sign Up</button>
        </div>
      </Form>

      {/* <Row className="footer">
        MY TOYS 2021
      </Row> */}
    </div>
  );
}

export default App;
