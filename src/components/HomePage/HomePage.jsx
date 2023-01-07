import React from "react";
import AddTodo from "../AddTodo/AddTodo";
import TodoList from "../TodoList/TodoList";

const HomePage = () => {
  return (
    <div>
      <h1>
        <AddTodo />
        <TodoList />
      </h1>
    </div>
  );
};

export default HomePage;
