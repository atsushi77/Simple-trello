import React from "react";
import { Task } from "./Task";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

export const Tasks = ({ taskList, setTaskList, inputTask }) => {
  return (
    <div>
      <DragDropContext>
        {/* dropできるエリア */}
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {taskList.map((task) => (
                <div key={task.id}>
                  <Task
                    taskList={taskList}
                    setTaskList={setTaskList}
                    inputTask={inputTask}
                    task={task}
                  />
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
