import axios from "axios";
import React, { createContext, useReducer } from "react";

export const todoContext = createContext();

let API = "http://localhost:8000/todos";

const INIT_STATE = {
  todos: [],
  taskToEdit: null,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_TODOS":
      return { ...state, todos: action.payload };

    case "EDIT_TODO":
      return { ...state, taskToEdit: action.payload };

    default:
      return state;
  }
}

const TodoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  //! read
  async function getTodos() {
    let { data } = await axios.get(API);
    dispatch({
      type: "GET_TODOS",
      payload: data,
    });
  }

  //! add
  async function addTask(newTask) {
    await axios.post(API, newTask);
    getTodos();
  }

  //! change status for through-line
  async function changeStatus(id) {
    let { data } = await axios.get(`${API}/${id}`);
    await axios.patch(`${API}/${id}`, { status: !data.status });
    getTodos();
  }

  //! delete

  async function deleteTask(id) {
    await axios.delete(`${API}/${id}`);
    getTodos();
  }

  //! get one task for change , then we gonna patch edited task

  async function getOneTask(id) {
    let { data } = await axios.get(`${API}/${id}`);
    dispatch({ type: "EDIT_TODO", payload: data });
  }

  //! this function for patch(отправлять) on db.json editedTask

  async function saveTask(newTask) {
    await axios.patch(`${API}/${newTask.id}`, newTask);
    getTodos();
  }

  let values = {
    todos: state.todos,
    taskToEdit: state.taskToEdit,
    addTask,
    getTodos,
    changeStatus,
    deleteTask,
    getOneTask,
    saveTask,
  };

  return <todoContext.Provider value={values}>{children}</todoContext.Provider>;
};

export default TodoContextProvider;
