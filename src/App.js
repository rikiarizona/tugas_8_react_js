import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  ListGroup,
  Jumbotron,
  Button,
  Carousel,
  Breadcrumb,
  Dropdown,
  Figure,
  Form,
  Modal,
} from "react-bootstrap";
import FigureCaption from "react-bootstrap/esm/FigureCaption";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      close: false,
    };
  }
  render() {
    return (
      <Container>
        <Row style={{ backgroundColor: "black" }}>
          <Col>
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdown-basic" size="sm">
                Pilih Bahasa
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/">Inggris</Dropdown.Item>
                <Dropdown.Item href="/">Indonesia</Dropdown.Item>
                <Dropdown.Item href="/">Spain</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col xs={9}></Col>
          <Col>
            <Figure>
              <Figure.Image
                src="https://png.pngtree.com/svg/20161113/ef1b24279e.png"
                width={32}
                height={32}
                roundedCircle
              />
              <Figure.Caption style={{ color: "white" }}>
                Alan Saputra
              </Figure.Caption>
            </Figure>
          </Col>
        </Row>
        <Row>
          <Col sm={8}></Col>
          <Col sm={4}>
            <Breadcrumb>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="/">Berita</Breadcrumb.Item>
              <Breadcrumb.Item active>Bola</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col xs={8}>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  height={300}
                  src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>Neymar Pemain Terbaik Brazil</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  height={300}
                  src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Inggris Mau Jadi Tim Terbaik Di Dunia</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  height={300}
                  src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Sani Rizki Fauzi Indonesia</h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col></Col>
        </Row>
        <br />
        <Row>
          <Col>
            <ListGroup>
              <ListGroup.Item active>Liga 1 Indonesia</ListGroup.Item>
              <ListGroup.Item>Liga Primer Inggris</ListGroup.Item>
              <ListGroup.Item disabled>Divisi Primera</ListGroup.Item>
              <ListGroup.Item>Serie A</ListGroup.Item>
              <ListGroup.Item>Ligue 1</ListGroup.Item>
              <ListGroup.Item>Bundes Liga</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col xs={7}>
            <Jumbotron>
              <h1>DIVISI PRIMERA</h1>
              <p>Main Untuk Catalunya, Gerard Pique Minta Dihormati</p>
              <Button variant="primary">Read More</Button>
            </Jumbotron>
          </Col>
          <Col>
            <center>
              <Figure>
                <Figure.Image
                  width={64}
                  height={64}
                  alt="Login"
                  src="https://png.pngtree.com/svg/20161113/ef1b24279e.png"
                />
                <FigureCaption style={{ color: "black" }}>
                  <h5>Silahkan Login</h5>
                </FigureCaption>
              </Figure>
            </center>
            <Form>
              <Form.Group>
                <Form.Control
                  type="email"
                  placeholder="Masukkan Email"
                  className="mb-2"
                />
                <Form.Control
                  type="password"
                  placeholder="Password"
                  className="mb-2"
                />
                <Form.Group controlId="checkbox">
                  <Form.Check type="checkbox" label="Term & Condition" />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  onClick={() => this.setState({ show: true })}
                >
                  Login
                </Button>
                <Modal show={this.state.show}>
                  <Modal.Header
                    closeButton
                    onClick={() => this.setState({ show: false })}
                  >
                    <Modal.Title>Login</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Anda Berhasil Login</Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant="secondary"
                      onClick={() => this.setState({ show: false })}
                    >
                      Close
                    </Button>
                    <Button
                      variant="primary"
                      onClick={() => this.setState({ show: false })}
                    >
                      Save Username & Password
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
