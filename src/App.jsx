import React, { useState } from "react";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import WorkingZone from "./components/WorkingZone";
import DoneZone from "./components/DoneZone";

const App = () => {
  const [title, setTitle] = useState(0);

  const [todoList, setTodoList] = useState([]);

  const add = (title, contents) => {
    const todo = {
      id: Date.now(),
      title,
      contents,
      // sdfsdf
    };

    setTodoList([...todoList, todo]);
  };

  return (
    <>
      <button onClick={add}>{title}</button>
      <Header />
      <TodoInput addFunction={add} />
      <WorkingZone />
      <DoneZone />
    </>
  );
};

export default App;
