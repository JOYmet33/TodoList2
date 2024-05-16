import React, { useState } from "react";

const TodoInput = ({ addInputList }) => {
  const [titleValue, setTitle] = useState("");
  const [contentValue, setContent] = useState("");

  function saveTitle() {
    setTitle(event.target.value);
  }
  function saveContent() {
    setContent(event.target.value);
  }

  return (
    <>
      <div className="input-form">
        <label className="input-title-label">제목</label>
        <input
          className="input-title"
          placeholder="할일의 제목을 적어주세요."
          type="text"
          value={titleValue}
          onChange={saveTitle}
        />
        <label className="input-content-label">내용</label>
        <input
          className="input-content"
          placeholder="상세하게 적어주세요."
          type="text"
          value={contentValue}
          onChange={saveContent}
        />
        <button
          className="input-btn"
          onClick={() => addInputList(titleValue, contentValue)}
        >
          추가
        </button>
      </div>
    </>
  );
};

export default TodoInput;
