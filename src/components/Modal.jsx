import { useState } from "react";

const Modal = ({ closeModal }) => {
  return (
    <div className="modal" onClick={() => closeModal()}>
      <div className="modal__block" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal__block-title">Добавить заметку</h2>
        <div className="modal__block-fields">
          <label>
            <input type="text" placeholder="Title" />
            <span>Title</span>
          </label>
          <label>
            <input type="text" placeholder="Content" />
            <span>Content</span>
          </label>
        </div>
        <div className="modal__block-btns">
          <button className="modal__block-btn red">Отмена</button>
          <button className="modal__block-btn purple">Добавить</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
