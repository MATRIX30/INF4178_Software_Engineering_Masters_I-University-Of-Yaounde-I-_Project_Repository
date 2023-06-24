import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

export class Navigation extends React.Component {
  render() {
  
    return (
      <>
        <Navbar
          collapseOnSelect
          expand="lg"
          fixed="top"
          style={{
            backgroundColor: '#000',
            boxShadow: '0px 0px 15px darkgray',
          }}
        >
          <Container>
            <Navbar.Brand href="/" className="text-white fw-bold">
              CRIME REPORT
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto fw-bold ">
                <div className="ms-5">
                  <Nav.Link href="/" className="text-white"></Nav.Link>{' '}
                </div>
                <div className="ms-5">
                  <Nav.Link
                    href="/#avtg"
                    class="nav-link active"
                    className="text-white"
                  ></Nav.Link>
                </div>
                <div className="ms-5">
                  <i
                    className="fa text-white pt-2"
                    style={{ fontSize: '24px' }}
                  >
                    &#xf013;
                  </i>{' '}
                </div>
                <div className="ms-5">
                  <i
                    style={{ fontSize: '24px' }}
                    className="fa text-white pt-2"
                  >
                    &#xf0f3;
                  </i>
                </div>
              </Nav>
              <Nav>
                <Nav.Link
                  eventKey={2}
                  href="/login"
                  className="Btn bg-white fw-bold rounded "
                  style={{ color: 'orange' }}
                >
                  Logout
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}
