import { useContext } from "react";
import editIcon from "../assets/img/edit.svg";
import removeIcon from "../assets/img/remove.svg";
import clsx from "clsx";
import { setting, TodoContext } from "../context/todoContext";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
const NotesItem = ({ view, note }) => {
  const notesItemTop = clsx("notes__item-top", { active: !view });
  const { t } = useTranslation();
  const { delNote, changeHandler, search } = useContext(TodoContext);
  const delHandler = (id) => {
    toast.error(t("noteWasDel"), setting);
    delNote(id);
  };
  return (
    <div className="notes__item">
      {note?.changed && (
        <p className="notes__item-changed">{t("changeNote")}</p>
      )}
      <div className={notesItemTop}>
        <h3 className="notes__item-top_title">{note.title}</h3>
        <p className="notes__item-top_date">{note.date}</p>
      </div>
      <p className="notes__item-desc">{note.desc}</p>
      {!search.length && (
        <>
          <div className="notes__item-btns">
            <button
              className="notes__item-btn purple"
              onClick={() => changeHandler(note)}
            >
              <img src={editIcon} alt="" />
              <span>{t("edit")}</span>
            </button>
            <button
              className="notes__item-btn red"
              onClick={() => delHandler(note.id)}
            >
              <img src={removeIcon} alt="" />
              <span>{t("del")}</span>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default NotesItem;
