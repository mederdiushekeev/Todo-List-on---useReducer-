import React, { useContext, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { todoContext } from "../../contexts/TodoContextProvider";

const EditTodo = () => {
  let { taskToEdit, saveTask } = useContext(todoContext);

  const [newEditItem, setNewEditItem] = useState(taskToEdit);

  let navigate = useNavigate();

  function handleEditInput(event) {
    let newTask = {
      ...newEditItem,
      task: event.target.value,
    };
    setNewEditItem(newTask);
  }

  useEffect(() => {
    setNewEditItem(taskToEdit);
  }, [taskToEdit]);

  return (
    <div>
      <div className="d-flex m-3">
        {newEditItem ? (
          <>
            {" "}
            <Form.Control
              onChange={handleEditInput}
              value={newEditItem.task}
              type="text"
              placeholder="edit todo"
              className="w-25"
            />
            <Button
              onClick={() => {
                saveTask(newEditItem);
                navigate("/");
              }}
              variant="warning"
            >
              Save
            </Button>{" "}
          </>
        ) : (
          "Loading..."
        )}
      </div>
    </div>
  );
};

export default EditTodo;
