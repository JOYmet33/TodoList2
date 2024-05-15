import React, { useState } from "react";

const TodoInput = ({ addFunction }) => {
  const [titleValue, setTitle] = useState("");
  const [contentValue, setContent] = useState("");

  function saveTitle() {
    setTitle(event.target.value);
    // console.log(event.target.value);
  }

  function saveContent() {
    setContent(event.target.value);
    // console.log(event.target.value);
  }

  return (
    <>
      <div>
        <div className="input-box">
          <label className="input-title-label">제목</label>
          <input
            className="input-title"
            placeholder="할일의 제목을 적어주세요."
            type="test"
            value={titleValue}
            onChange={saveTitle}
          />
          <label className="input-content-label">내용</label>
          <input
            className="input-content"
            placeholder="상세하게 적어주세요."
            type="test"
            value={contentValue}
            onChange={saveContent}
          />
        </div>
        <button
          className="input-btn"
          onClick={() => addFunction(titleValue, contentValue)}
        >
          추가하기
        </button>
      </div>
    </>
  );
};

export default TodoInput;
