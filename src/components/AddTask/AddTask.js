import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./AddTask.scss";
import { isEmpty } from "lodash";
import { ReactComponent as Send } from "../../asset/send.svg";
import "firebase/compat/app";
import db from "../../utils/firebase";
import { collection, addDoc } from "firebase/firestore";

const AddTask = () => {
  const [valueInput, setValueInput] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.target.reset();
    if (!isEmpty(valueInput)) {
      const docRef = await addDoc(collection(db, "task"), {
        name: valueInput,
        completed: false,
      });
      return docRef;
    } else {
      return false;
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="add-task">
      <input
        className="add-task__input"
        type="text"
        onChange={(event) => setValueInput(event.target.value)}
        placeholder="Add task"
      />
      <Button type="submit">
        <Send />
      </Button>
    </Form>
  );
};

export default AddTask;
