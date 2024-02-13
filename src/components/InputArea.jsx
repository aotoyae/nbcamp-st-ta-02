import { useState } from "react";
import { useDispatch } from "react-redux";
import shortid from "shortid";

function InputArea() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  return (
    <div>
      todo:
      <input
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        placeholder="title"
      />
      <input
        value={body}
        onChange={(e) => {
          setBody(e.target.value);
        }}
        placeholder="content"
      />
      <button
        onClick={() => {
          const newTodo = {
            id: shortid(),
            title,
            body,
            isDone: false,
          };

          dispatch({
            type: "ADD_TODO",
            payload: newTodo,
          });
        }}
      >
        click
      </button>
    </div>
  );
}

export default InputArea;
