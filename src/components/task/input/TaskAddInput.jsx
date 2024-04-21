import React, { useState } from "react";
import "./TaskAddInput.css";
import { v4 as uuid } from "uuid";

export const TaskAddInput = ({
  taskList,
  setTaskList,
  inputTask,
  setInputTask,
}) => {
  const handleChange = (e) => {
    setInputTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask();
  };

  const addTask = () => {
    if (inputTask === "") {
      return;
    }
    const newTask = {
      id: uuid(),
      draggableId: `task-${taskList.length}`,
      content: inputTask,
    };
    setTaskList([newTask, ...taskList]);
    setInputTask("");
  };

  const handleBlur = () => {
    addTask();
  };

  return (
    <div className="taskAddInput">
      <form onSubmit={handleSubmit} action="">
        <input
          placeholder="add a task"
          onChange={handleChange}
          onBlur={handleBlur}
          value={inputTask}
          type="text"
          autoFocus
          maxLength={"10"}
        />
      </form>
    </div>
  );
};
