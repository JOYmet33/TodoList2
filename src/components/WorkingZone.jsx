import React, { useState } from "react";

const WorkingZone = () => {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoContent, setTodoContent] = useState("");

  function addInputValue() {
    // TodoInput.jsx에서 받아온 값을 저장하는 동작
  }

  return (
    <>
      <h3 className="working-zone-title">Working...🔥</h3>
      <div className="working">
        <h3 className="todo-title">할일 제목</h3>
        <p className="todo-content">할일 내용</p>
        <div className="btn-box">
          <button className="delete-btn">삭제</button>
          <button className="complete-btn">완료</button>
        </div>
      </div>
    </>
  );
};

export default WorkingZone;
