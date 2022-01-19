import "./GetTask.scss";

const Task = (props) => {
  const {
    dataTask: { name },
  } = props;

  return (
    <>
      <p>{name}</p>
    </>
  );
};

export default Task;
