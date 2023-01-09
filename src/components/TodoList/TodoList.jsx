import React, { useContext, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { todoContext } from "../../contexts/TodoContextProvider";

const TodoList = () => {
  let { todos, getTodos, changeStatus, deleteTask, getOneTask } =
    useContext(todoContext);

  let navigate = useNavigate();

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      {todos.map((item) => (
        <Card border="primary" style={{ width: "31rem" }} key={item.id}>
          <Card.Header className="d-flex justify-content-between align-items-center">
            <input
              type="checkbox"
              checked={item.status}
              onChange={() => changeStatus(item.id)}
            />
            <span className={item.status ? "completed" : ""}>{item.task}</span>
            <div>
              <Button
                onClick={() => {
                  getOneTask(item.id);
                  navigate(`/edit/${item.id}`);
                }}
                variant="success"
                size="sm"
              >
                edit
              </Button>
              <Button
                onClick={() => deleteTask(item.id)}
                variant="danger"
                size="sm"
              >
                delete
              </Button>
            </div>
          </Card.Header>
        </Card>
      ))}
    </div>
  );
};

export default TodoList;
