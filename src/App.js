import { Container, Row, Col } from "react-bootstrap";
import AddTask from "./components/AddTask/AddTask";
import "./App.scss";

function App() {
  return (
    <Container fluid className="app">
      <div className="title">
        <h1>hola</h1>
      </div>
      <Row className="to-do-list">
        <Col
          className="to-do-list__title"
          xs={{ span: 10, offset: 1 }}
          md={{ span: 6, offset: 3 }}
        >
          <h2>TODAY</h2>
        </Col>
        <Col
          className="to-do-list__list"
          xs={{ span: 10, offset: 1 }}
          md={{ span: 6, offset: 3 }}
        >lista de tareas
          <AddTask />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
