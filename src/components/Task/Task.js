import "./Task.scss";
import { ReactComponent as Check } from "../../asset/check.svg";
import { ReactComponent as Delete } from "../../asset/delete.svg";
import db from "../../utils/firebase";
import { updateDoc, doc } from "firebase/firestore";
// import { useState } from "react";

const Task = (props) => {
  const {
    dataTask
  } = props;

  const completeTask = async () => {


    try {
      const updatecheckTask = doc(db, "task", dataTask.id);

      await updateDoc(updatecheckTask, {
        completed: true,
        
      });
    } catch (err) {
      console.log(err);
    }

  };

  return (
    <div className="task">
      <div>
        <Check className={dataTask.completed ? "completed" : ""} 
        onClick={completeTask} />
      </div>
      <p>{dataTask.name}</p>
      <div>
        <Delete />
      </div>
    </div>
  );
};

export default Task;
