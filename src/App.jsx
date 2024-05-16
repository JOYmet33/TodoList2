import { useState } from "react";
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
          .map((list, index) => {
            console.log(index);
            return (
              <div key={list.id}>
                <h2 className="todo-title">{list.todoTitle}</h2>
                <p className="todo-content">{list.todoContent}</p>
                <div className="buttons">
                  <button
                    className="delete-btn"
                    onClick={() => deleteTodo(index)}
                  >
                    삭제
                  </button>
                  {/* <button className="complete-btn" onClick={함수2}>
                    완료
                  </button> */}
                </div>
              </div>
            );
          })}
        ;
      </>
    );
  }

  // 함수: out from todoList
  const deleteTodo = (index) => {
    // 1. 해당 index를 찾아야 한다.
    // 2. 전체 배열 기준으로 index 값의 인자를 빼줘야한다.
    let temp = [...todoList];
    temp.splice(index, 1);
    // 3. 해당 값을 빼준 배열을 다시 상태 값에 저장한다.
    setTodoList(temp);
  };

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
          <div>
            {todoList
              .filter((list) => !list.isDone)
              .map((list, index) => {
                console.log(index);
                return (
                  <div key={list.id}>
                    <h2 className="todo-title">{list.todoTitle}</h2>
                    <p className="todo-content">{list.todoContent}</p>
                    <div className="buttons">
                      <button
                        className="delete-btn"
                        onClick={() => deleteTodo(index)}
                      >
                        삭제
                      </button>
                      {/* <button className="complete-btn" onClick={함수2}>
                    완료
                  </button> */}
                    </div>
                  </div>
                );
              })}
          </div>
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
