import { useState } from "react";
import { v4 } from "uuid";

const Modal = ({ closeModal, addNote }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const add = () => {
    if (title.length > 2 && content.length > 2) {
      const item = {
          id: v4(),
          title: title,
          desc: content,
          date: new Date().toLocaleDateString(),
        };
        addNote(item);
        setTitle('')
        setContent('')
        closeModal()
    }
  };
  return (
    <div className="modal" onClick={() => closeModal()}>
      <div className="modal__block" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal__block-title">Добавить заметку</h2>
        <div className="modal__block-fields">
          <label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <span>Title</span>
          </label>
          <label>
            <input
              type="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <span>Content</span>
          </label>
        </div>
        <div className="modal__block-btns">
          <button className="modal__block-btn red" onClick={()=>closeModal()}>Отмена</button>
          <button className="modal__block-btn purple" onClick={()=>add()}>Добавить</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
