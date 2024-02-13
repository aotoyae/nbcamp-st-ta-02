// import uuid from "react-uuid";
import shortid from "shortid";

const initialState = [
  {
    id: shortid.generate(),
    title: "제목1",
    body: "내용1",
    isDone: false,
  },
  {
    id: shortid.generate(),
    title: "제목2",
    body: "내용2",
    isDone: true,
  },
];

// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const newTodoItem = action.payload;

      return [newTodoItem, ...state];

    case "DELETE_TODO":
      const deleteTargetId = action.payload;
      const filteredList = state.filter((item) => item.id !== deleteTargetId);

      return filteredList;

    case "SWITCH_TODO":
      const switchTargetId = action.payload;
      const mappedList = state.map((item) => {
        if (item.id === switchTargetId) {
          return { ...item, isDone: !item.isDone };
        } else {
          return item;
        }
      });

      return mappedList;

    default:
      return state;
  }
};

export default todos;
