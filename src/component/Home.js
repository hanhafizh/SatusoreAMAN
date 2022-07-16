import { Container, Row, Col, Button, Image } from "react-bootstrap";
import a1image from "../assets/images/coffe.jpg";

const Home = () => {
  return (
    <div>
      <div className="MainContent">
        <Container className="text-white text-center justify-content-center align-items-center">
          <Row>
            <Col>
              <div className="Title">Satu Sore</div>
              <div className="SubTitle">“Menikmati Satu Sore Bersama.”</div>
              <div className="ButtonUtama">
                <Button href="filter" variant="dark">
                  Lihat Menu
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="BawahContent">
        <Container>
          <Row className="px-4 my-5">
            <Col sm={7}>
              <Image
                src={a1image}
                width="600px"
                height="350px"
                className="a1Image"
                rounded
              />
            </Col>

            <Col className="content2-text" md={5}>
              <h1 className="aboutkopi text-left fw-bold">About The Coffe</h1>
              <p className="text-justify">
                Coffee is consumed in such great quantities, it is the world’s
                2nd largest traded commodity, surpassed only by crude oil. It is
                our most beloved beverage after water. It’s worth well over $100
                billion worldwide. Beethoven was such an ardent coffee lover
                that he’d count 60 beans per cup before making his brew. So many
                interesting facts about coffee and its rich history. A love of
                all things connected with coffee has brought both large and
                small companies into the world of coffee production and trading,
                making it a very modern product as well. Technology and
                improvements in coffee trading industry are two of the major
                factors which help a lot of those companies to compete in the
                volatile environment of coffee trading.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
