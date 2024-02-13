import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StH3 = styled.h3`
  height: 80px;
  line-height: 80px;
  color: red;
`;

function List({ isActive }) {
  const dispatch = useDispatch();

  const todos = useSelector((item) => {
    return item.todos;
  });

  return (
    <article>
      <StH3>{isActive ? "Todo List" : "Done List"}</StH3>
      <ul>
        {todos
          .filter((todo) => todo.isDone !== isActive)
          .map((todo) => (
            <li key={todo.id}>
              <h4>title: {todo.title}</h4>
              <p>content: {todo.body}</p>
              <button
                onClick={() => {
                  dispatch({ type: "SWITCH_TODO", payload: todo.id });
                }}
              >
                {isActive ? "완료" : "취소"}
              </button>
              <button
                onClick={() => {
                  dispatch({ type: "DELETE_TODO", payload: todo.id });
                }}
              >
                삭제
              </button>
              <Link to={`/${todo.id}`}>상세</Link>
            </li>
          ))}
      </ul>
    </article>
  );
}

export default List;
