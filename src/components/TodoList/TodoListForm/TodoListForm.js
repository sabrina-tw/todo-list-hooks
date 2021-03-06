import { TextField } from "@material-ui/core";
import React, { useState } from "react";

const TodoListForm = ({ addTodoList }) => {
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    addTodoList(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleAdd} data-testid="todo-list-form">
      <TextField
        inputProps={{ "aria-label": "todo-list-composer" }}
        label="New TodoList"
        value={title}
        onChange={handleChange}
        variant="outlined"
      />
    </form>
  );
};

export default TodoListForm;
