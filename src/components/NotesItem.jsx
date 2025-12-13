import { useState } from "react";
import editIcon from "../assets/img/edit.svg";
import removeIcon from "../assets/img/remove.svg";
import clsx from "clsx";

const NotesItem = ({ view }) => {
  const notesItemTop = clsx("notes__item-top", { active: !view });
  return (
    <div className="notes__item">
      <div className={notesItemTop}>
        <h3 className="notes__item-top_title">Title</h3>
        <p className="notes__item-top_date">07.03.2022</p>
      </div>
      <p className="notes__item-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor
      </p>
      <div className="notes__item-btns">
        <button className="notes__item-btn purple">
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
