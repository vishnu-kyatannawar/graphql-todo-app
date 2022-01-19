import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container fluid className="main-container p-5">
        <Row>
          <Col>
            <Container className="todo-wrapper">
              <Row>
                <Col></Col>
                <Col xs={8}>
                  <Container>
                    <Row>
                      <Col className="title-container">
                          <h1>TODOs</h1>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="todo-box">
                      </Col>
                    </Row>
                  </Container>
                </Col>
                <Col></Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
