import { Container, Row, Col, Image } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <div className="d-flex flex-column align-items-center mb-5">
        <h1>Text1</h1>
        <h5>Text2</h5>
      </div>

      <Container>
        <Row>
          <Col>
            <h3>Text2</h3>
            <Row>
              <Col>
                <p>text</p>
              </Col>
              <Col>
                <p>text</p>
              </Col>
            </Row>
          </Col>
          <Col>
            <Image
              src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGxlYXJuaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              alt="lead pic"
              width="600px"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Header;
