import React, { useState } from "react";
import "./TaskCardTitle.css";

export const TaskCardTitle = () => {
  const [isClicked, setIsClicked] = useState(true);
  const [inputCardTitle, setInputCardTitle] = useState("todo");
  const handleClicked = () => {
    setIsClicked(false);
    focus();
  };
  const handleChange = (e) => {
    setInputCardTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsClicked(true);
  };
  const handleBlur = () => {
    setIsClicked(true);
  };

  return (
    <div onClick={handleClicked} className="taskCardTitle">
      {isClicked ? (
        <h3>{inputCardTitle}</h3>
      ) : (
        <form onSubmit={handleSubmit} action="">
          <input
            value={inputCardTitle}
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            autoFocus
            maxLength={"10"}
          />
        </form>
      )}
    </div>
  );
};
