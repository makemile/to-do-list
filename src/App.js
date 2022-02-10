import { collection, getDocs } from "firebase/firestore";
import { orderBy, size } from "lodash";
import React, { useEffect, useState } from "react";
import db from "./utils/firebase";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import AddTask from "./components/AddTask/AddTask";
import Task from "./components/Task/Task";
import "./App.scss";

function App() {
  const [task, setTask] = useState(null);
  console.log(task)
  const [reloadTask, setReloadTask] = useState(false);


  console.log(task);

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
        setTask(arrayTask);
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
        >{!task ? (
          <div className="loading">
            <Spinner animation="border"
            />
            <span>Cargando...</span>
          </div>
        ) : size(task) === 0 ? (
          <h3>No hay Tareas...</h3>


        ) : (
          task.map((task, index) =>
          (
            <Task key={index} task={task} setReloadTask={setReloadTask}/>
          )
          )
        )}

        </Col>
        <Col
          className="to-do-list__input"
          xs={{ span: 10, offset: 1 }}
          md={{ span: 6, offset: 3 }}
        >
          <AddTask setReloadTask={setReloadTask} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
