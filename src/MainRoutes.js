import React from "react";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import EditTodo from "./components/EditTodo/EditTodo";

const MainRoutes = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todos" element={<TodoList />} />
        <Route path="/add" element={<AddTodo />} />
        <Route path="/edit/:id" element={<EditTodo />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
