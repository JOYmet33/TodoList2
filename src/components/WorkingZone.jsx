import React, { useState } from "react";

const WorkingZone = ({ todoList }) => {
  const [todoTitle, setTodoTitle] = useState([]);
  const [todoContent, setTodoContent] = useState([]);
  console.log(todoList);


  function makeMemo (todoList[]) {
   return (
    <>
      <h3 className="todo-title" type="text" value="todoTitle">
            {${todoTitle}}
            </h3>
            <p className="todo-content" type="text">
            {${todoContent}}
            </p>
            <div className="btn-box">
              <button className="delete-btn">삭제</button>
              <button className="complete-btn">완료</button>
            </div>
    </>
   )
  }

  return (
      {todoList.map(() => {
      })}
  );
};

export default WorkingZone;
