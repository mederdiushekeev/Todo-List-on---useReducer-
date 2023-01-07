import React, { useContext, useEffect } from "react";
import { Card } from "react-bootstrap";
import { todoContext } from "../../contexts/TodoContextProvider";

const TodoList = () => {
  let { todos, getTodos, changeStatus } = useContext(todoContext);

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      {todos.map((item) => (
        <Card border="primary" style={{ width: "31rem" }} key={item.id}>
          <Card.Header>
            <input
              type="checkbox"
              checked={item.status}
              onChange={() => changeStatus(item.id)}
            />
            <span className={item.status ? "completed" : ""}>{item.task}</span>
          </Card.Header>
        </Card>
      ))}
    </div>
  );
};

export default TodoList;
