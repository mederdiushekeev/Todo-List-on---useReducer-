import axios from "axios";
import React, { createContext, useReducer } from "react";

export const todoContext = createContext();

let API = "http://localhost:8000/todos";

const INIT_STATE = {
  todos: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_TODOS":
      return { ...state, todos: action.payload };

    default:
      return state;
  }
};

const TodoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  //! read
  const getTodos = async () => {
    let { data } = await axios.get(API);
    dispatch({
      type: "GET_TODOS",
      payload: data,
    });
  };

  //! add
  const addTask = async (newTask) => {
    await axios.post(API, newTask);
    getTodos();
  };

  const changeStatus = async (id) => {
    let { data } = await axios.get(`${API}/${id}`);
    await axios.patch(`${API}/${id}`, { status: !data.status });
    getTodos();
  };

  let values = { addTask, todos: state.todos, getTodos, changeStatus };

  return <todoContext.Provider value={values}>{children}</todoContext.Provider>;
};

export default TodoContextProvider;
