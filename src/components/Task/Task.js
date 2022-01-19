import "./Task.scss";
import { ReactComponent as Check } from "../../asset/check.svg";
import { ReactComponent as Delete } from "../../asset/delete.svg";

const Task = (props) => {
  const {
    dataTask: { name },
  } = props;

  return (
    <div className="task">
      <div>
        <Check />
      </div>
      <p>{name}</p>
      <div>
        <Delete />
      </div>
    </div>
  );
};

export default Task;
