import React, { useState } from "react";

const WorkingZone = ({ todoList }) => {
  return (
    <>
      {todoList
        .filter((x) => !x.isDone)
        .map((list) => {
          return (
            <div key={list.id}>
              <h3 className="todo-title">{list.todoTitle}</h3>
              <p className="todo-content">{list.todoContent}</p>
              <div className="btn-box">
                <button className="delete-btn">삭제</button>
                <button className="cancel-btn">취소</button>
              </div>
            </div>
          );
        })}
      ;
    </>
  );
};

export default WorkingZone;
