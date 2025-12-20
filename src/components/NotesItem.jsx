import { useState } from "react";
import editIcon from "../assets/img/edit.svg";
import removeIcon from "../assets/img/remove.svg";
import clsx from "clsx";

const NotesItem = ({ view, note, changeHandler }) => {
  const notesItemTop = clsx("notes__item-top", { active: !view });
  return (
    <div className="notes__item">
      {note?.changed && <p className="notes__item-changed">Изменено</p>}
      <div className={notesItemTop}>
        <h3 className="notes__item-top_title">{note.title}</h3>
        <p className="notes__item-top_date">{note.date}</p>
      </div>
      <p className="notes__item-desc">{note.desc}</p>
      <div className="notes__item-btns">
        <button
          className="notes__item-btn purple"
          onClick={() => changeHandler(note)}
        >
          <img src={editIcon} alt="" />
          <span>РЕДАКТИРОВАТЬ</span>
        </button>
        <button className="notes__item-btn red">
          <img src={removeIcon} alt="" />
          <span>Удалить</span>
        </button>
      </div>
    </div>
  );
};

export default NotesItem;
