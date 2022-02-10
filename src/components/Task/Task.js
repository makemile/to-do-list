import "./Task.scss";
import { ReactComponent as Check } from "../../asset/check.svg";
import { ReactComponent as Delete } from "../../asset/delete.svg";
import db from "../../utils/firebase";
import { updateDoc, doc, deleteDoc } from "firebase/firestore";
// import { useState } from "react";

const Task = (props) => {
  const { task, setReloadTask } = props;
  console.log(task)

  //completed task//
  const completeTask = async () => {
    try {
      const updatecheckTask = doc(db, "task", task.id);

      await updateDoc(updatecheckTask, {
        completed: !task.completed,
      });
      setReloadTask(true);
    } catch (err) {
      console.log(err);
    }
  };
//deleted task//
  const deleteTask = async () => {
    try {
      const deleteTasks = doc(db, "task", task.id);
      await deleteDoc(deleteTasks, {
        delete: !task.delete,
      });
      setReloadTask(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="task">
      <div>
        <Check
          className={task.completed ? "completed" : ""}
          onClick={completeTask}
        />
      </div>
      <p>{task.name}</p>
      <div>
        <Delete onClick={deleteTask} />
      </div>
    </div>
  );
};

export default Task;
