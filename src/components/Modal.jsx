import { useContext, useState } from "react";
import { v4 } from "uuid";
import { Bounce, toast } from "react-toastify";
import { TodoContext, setting } from "../context/todoContext";
import { useTranslation } from "react-i18next";

const Modal = ({ isEdit, editNote }) => {
  const { t } = useTranslation();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { addOrChangeNoteHandler, closeModal } = useContext(TodoContext);

  const add = () => {
    if (title.length > 2 && content.length > 2) {
      const item = {
        id: editNote?.id ?? v4(),
        title: title,
        desc: content,
        date: new Date().toLocaleDateString(),
      };
      if (editNote && isEdit) item.changed = true;
      addOrChangeNoteHandler(item);
      setTitle("");
      setContent("");
      closeModal();
      if (editNote) {
        toast.info(t("noteWasEdit"), setting);
      } else {
        toast.success(t("noteWasAdded"), setting);
      }
    } else {
      toast.error(t("error"), setting);
    }
  };
  return (
    <div className="modal" onClick={() => closeModal()}>
      <div className="modal__block" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal__block-title">
          {!isEdit ? t("addNote") : t("changeNote")}
        </h2>
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
          <button className="modal__block-btn red" onClick={() => closeModal()}>
            {t("cansel")}
          </button>
          <button className="modal__block-btn purple" onClick={() => add()}>
            {!isEdit ? t("add") : t("change")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
