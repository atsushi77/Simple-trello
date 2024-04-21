import { TaskCardTitle } from "./TaskCardTitle";
import { Tasks } from "./Tasks";
import { TaskCardDeleteButton } from "./button/TaskCardDeleteButton";
import { TaskAddInput } from "./input/TaskAddInput";

import "./TaskCard.css";
import { useState } from "react";

export const TaskCard = () => {
  const [taskList, setTaskList] = useState([]);
  const [inputTask, setInputTask] = useState("");

  return (
    <div className="taskCard">
      <TaskCardTitle />
      <TaskCardDeleteButton />
      <TaskAddInput
        taskList={taskList}
        setTaskList={setTaskList}
        inputTask={inputTask}
        setInputTask={setInputTask}
      />
      <Tasks
        taskList={taskList}
        setTaskList={setTaskList}
        inputTask={inputTask}
      />
    </div>
  );
};
