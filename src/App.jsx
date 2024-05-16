import React, { useState } from "react";
import TodoInput from "./components/TodoInput";
import "./App.css";

const App = () => {
  const [todoList, setTodoList] = useState([
    {
      id: Date.now(),
      todoTitle: "할일 제목",
      todoContent: "이런저런 상세한 일들",
      isDone: false,
    },
  ]);

  // 함수: 새로운 인풋 리스트 만들기
  function addInputList(titleValue, contentValue) {
    const newTodoList = {
      id: Date.now(),
      todoTitle: titleValue,
      todoContent: contentValue,
      isDone: false,
    };
    setTodoList([...todoList, newTodoList]);
  }

  //함수 : addWorking
  function addWorking() {
    return (
      <>
        {todoList
          .filter((list) => !list.isDone)
          .map((list) => {
            return (
              <div key={list.id}>
                <h2 className="todo-title">{list.todoTitle}</h2>
                <p className="todo-content">{list.todoContent}</p>
                <div className="buttons">
                  <button className="delete-btn" onClick={함수1}>
                    삭제
                  </button>
                  <button className="complete-btn" onClick={함수2}>
                    완료
                  </button>
                </div>
              </div>
            );
          })}
        ;
      </>
    );
  }

  // 함수: out from todoList
  function 함수1() {
    /*
     *
     */
  }

  return (
    <div className="root">
      <header>
        <h1 className="main-title">My Todo List</h1>
        <h2 className="process-name">React</h2>
      </header>
      <TodoInput addInputList={addInputList} />
      <div className="working">
        <h1 className="working-title">🔥Working</h1>
        <div className="working-list">
          <div>{addWorking}</div>
        </div>
      </div>
      <div className="done">
        <h1 className="done-title">🎉Done</h1>
        <div className="done-list">
          <h2 className="todo-title">할일 제목</h2>
          <p className="todo-content">할일 내용</p>
          <div className="btn-box">
            <button className="delete-btn">삭제</button>
            <button className="cancel-btn">취소</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
