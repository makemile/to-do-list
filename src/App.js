import { collection, getDocs } from "firebase/firestore";
import { orderBy } from "lodash";
import React, { useEffect, useState } from "react";
import db from "./utils/firebase";
import { Container, Row, Col } from "react-bootstrap";
import AddTask from "./components/AddTask/AddTask";
import Task from "./components/Task/Task";
import "./App.scss";

function App() {
  const [dataTask, setDataTask] = useState([]);
  const [reloadTask, setReloadTask] = useState(false);


  console.log(dataTask);

  useEffect(() => {
    const getData = async () => {
      try {
        const arrayTask = [];
        const querySnapshot = await getDocs(
          collection(db, "task"),
          orderBy("created", "desc")
        );
        querySnapshot.forEach((doc) => {
          let id = doc.id;
          let name = doc.data().name;
          let object = { id, name };

          arrayTask.push(object);
        });
        setDataTask(arrayTask);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
    setReloadTask(false);
  }, [reloadTask]);

  return (
    <Container fluid className="app">
      <div className="title">
        <h1>Perez</h1>
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
        >
          {dataTask.map((dataTask, index) =>
          (
            <Task key={index} dataTask={dataTask} />
          )
          )}
        </Col>
        <Col
          className="to-do-list__input"
          xs={{ span: 10, offset: 1 }}
          md={{ span: 6, offset: 3 }}
        >
          <AddTask setReloadTask={setReloadTask}/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
