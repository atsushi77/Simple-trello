import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./Task.css";
import { Draggable } from "react-beautiful-dnd";

export const Task = ({ taskList, setTaskList, inputTask, task }) => {
  const [isClicked, setIsClicked] = useState(true);
  const [inputEditTask, setInputEditTask] = useState(task.content);

  const onDeleteTask = (id) => {
    setTaskList(taskList.filter((filterTask) => filterTask.id !== id));
  };

  const handleClicked = () => {
    setIsClicked(false);
    focus();
  };
  const handleChange = (e) => {
    setInputEditTask(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask();

    setIsClicked(true);
  };

  const updateTask = () => {
    // if (inputEditTask === "") {
    //   onDeleteTask();
    // }
    const updatedTaskList = taskList.map((mapTask) =>
      mapTask.id === task.id
        ? {
            ...mapTask,
            content: inputEditTask,
          }
        : mapTask
    );
    setTaskList(updatedTaskList);
  };
  const handleBlur = () => {
    updateTask();
    setIsClicked(true);
  };

  return (
    <div onClick={handleClicked} className="task">
      {isClicked ? (
        <Draggable index={task.id} draggableId="task.draggableId">
          {(provided) => (
            <div
              key={task.id}
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              className="taskBox"
            >
              <p className="taskContent">{task.content}</p>
              <button
                onClick={() => onDeleteTask(task.id)}
                className="taskTrashButton"
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          )}
        </Draggable>
      ) : (
        <form onSubmit={handleSubmit} action="">
          <input
            value={inputEditTask}
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            autoFocus
            maxLength={"10"}
          />
          {/* <button onClick={onDeleteTask} className="taskTrashButton">
            <FontAwesomeIcon icon={faTrash} />
          </button> */}
        </form>
      )}
    </div>
  );
};
