import React, { useState, useEffect } from "react";
import { Form, Button} from "react-bootstrap";
import "./AddTask.scss";
import { isEmpty } from "lodash";
import { ReactComponent as Send } from "../../asset/send.svg"
import "firebase/compat/app";
import firebase from "../../utils/firebase";

const db = firebase.firestore(firebase);

const AddTask = () => {

    const [valueInput, setValueInput] = useState("");


    // useEffect(() => {
    // const collectionTask = await addDoc(collection(db, "Task"){})
    


    // }, [])



    const FormOnSubmit = (event) => {
        event.preventDefault();
        if(isEmpty(valueInput)){
            
        }else{
            return false
        }

        console.log(valueInput);
        
    }


    return(
       <Form onSubmit={FormOnSubmit} className="add-task">

           <input className="add-task__input"
           type="text"
           onChange={(event) => setValueInput(event.target.value)}
           placeholder="Add task"
           />
           <Button type="submit"><Send/></Button>
         
       </Form>
    )
}

export default AddTask;