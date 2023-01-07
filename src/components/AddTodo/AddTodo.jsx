import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { todoContext } from "../../contexts/TodoContextProvider";

const AddTodo = () => {
  let { addTask } = useContext(todoContext);

  const [inpValue, setInpValue] = useState("");

  function handleClick() {
    let newObj = {
      task: inpValue,
      status: false,
    };
    addTask(newObj);
    setInpValue("");
  }

  return (
    <div className="d-flex m-3">
      <Form.Control
        type="text"
        placeholder="add todo"
        className="w-25"
        value={inpValue}
        onChange={(e) => setInpValue(e.target.value)}
      />
      <Button onClick={handleClick} variant="warning">
        Add
      </Button>
    </div>
  );
};

export default AddTodo;
