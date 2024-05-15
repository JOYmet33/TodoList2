import React, { useState } from "react";

const WorkingZone = ({ todoList }) => {
  const [todoTitle, setTodoTitle] = useState(["할일 제목"]);
  const [todoContent, setTodoContent] = useState(["할일 내용"]);

  console.log(todoList);

  return (
    <>
      <h3 className="working-zone-title">Working...🔥</h3>
      <div className="working">
        <h3 className="todo-title" type="text" value="todoTitle">
          {todoTitle[0]}
        </h3>
        <p className="todo-content" type="text" value="todoContent">
          {todoContent[0]}
        </p>
        <div className="btn-box">
          <button className="delete-btn">삭제</button>
          <button className="complete-btn">완료</button>
        </div>
      </div>
    </>
  );
};

export default WorkingZone;
