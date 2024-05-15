import React from "react";

const DoneZone = () => {
  return (
    <>
      <h3 className="todo-title">할일 제목</h3>
      <p className="todo-content">할일 내용</p>
      <div className="btn-box">
        <button className="delete-btn">삭제</button>
        <button className="cancle-btn">취소</button>
      </div>
    </>
  );
};

export default DoneZone;
