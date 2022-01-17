import React from "react";
import { Form, Button} from "react-bootstrap";
import "./AddTask.scss";
import { ReactComponent as Send } from "../../asset/send.svg"


const AddTask = () => {

    const FormOnSubmit = () => {
        console.log("formulario")
    }


    return(
       <Form onSubmit={FormOnSubmit} className="add-task">
           <input className="add-task__input"
           type="text"
           onChange={FormOnSubmit}
           placeholder="Add task"
           />
           <Button type="submit"><Send/></Button>
         
       </Form>
    )
}

export default AddTask;