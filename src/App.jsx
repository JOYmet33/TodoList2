import React, { useState } from "react";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import WorkingZone from "./components/WorkingZone";
import DoneZone from "./components/DoneZone";
const App = () => {
  const [todoList, setTodoList] = useState([
    {
      id: Date.now(),
      todoTitle: "할일 제목",
      todoContent: "이런저런 상세한 일들",
    },
  ]);

  // const [workingList, setWorkingList] =useState([])

  // 함수: 새로운 인풋 리스트 만들기
  function addInputList(titleValue, contentValue) {
    const newTodoList = {
      id: Date.now(),
      todoTitle: titleValue,
      todoContent: contentValue,
    };
    setTodoList([...todoList, newTodoList]);
  }

  return (
    <>
      <Header />
      <TodoInput addInputList={addInputList} />
      <WorkingZone todoList={todoList} />
      <DoneZone />
    </>
  );
};

export default App;
