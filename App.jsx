import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";

const StartupCard = ({ startup }) => {
  return (
    <Card style={{margin: '6px'}}>
      <Card.Body>
      <Card.Img style={{}} src={startup.image} />
        <Card.Title>{startup.name}</Card.Title>
        <Card.Text>
          <strong>Email :</strong> {startup.email}
        </Card.Text>
        <Card.Text>
          <strong>Linkedin :</strong> {startup.linkedin}
        </Card.Text>
        <Card.Text>
          <strong>Description :</strong>
          {startup.description.replace("<p>", "").replace("</p>", "")}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

const StartupList = ({ startups }) => {
  return (
    <Container>
      <Row>
        {startups.map((startup) => (
          <Col key={startup.id} xs={12} sm={6} md={4}>
            <StartupCard startup={startup} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

const App = () => {
  const [startups, setStartups] = useState([]);

  useEffect(() => {
    const fetchStartups = async () => {
      const response = await axios.get(
        "https://api.ecelliitr.org/edc/community"
      );
      setStartups(response.data);
    };

    fetchStartups();
  }, []);

  return <StartupList startups={startups} />;
};

export default App;
