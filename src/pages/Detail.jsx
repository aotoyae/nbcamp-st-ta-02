import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();

  const { todos } = useSelector((item) => {
    return item;
  });

  const todo = todos.find((item) => item.id === id);

  console.log(todo);

  return (
    <div>
      <h1>{todo.title}</h1>
      <p>{todo.body}</p>
    </div>
  );
};

export default Detail;
