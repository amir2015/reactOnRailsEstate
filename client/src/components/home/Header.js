import { Container, Row, Col, Image } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <div className="d-flex flex-column align-items-center mb-5">
        <p className="d-flex flex-column align-items-center m-2">
          <h1>Find Your Dream Home Now!</h1>
        </p>

        <Container>
          <Row>
            <Col>
              <h3>Why Us!</h3>
              <Row>
                <Col>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
                    provident sequi illum commodi omnis porro cum excepturi,
                    nostrum voluptatum, voluptatem quae voluptate laboriosam
                    odit, ipsa praesentium accusamus. Alias, exercitationem
                    maiores!
                  </p>
                </Col>
                <Col>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Cupiditate labore repudiandae dolor harum at minima sint
                    exercitationem? Qui vero deleniti ducimus consectetur,
                    provident ut sint voluptatem facere at quisquam sapiente?
                  </p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Image
                src="https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="lead pic"
                width="600px"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Header;
