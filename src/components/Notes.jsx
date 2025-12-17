import React, { useState } from "react";
import listIcon from "../assets/img/list.svg";
import gridIcon from "../assets/img/grid.svg";
import clsx from "clsx";
import NotesItem from "./NotesItem";
const Notes = ({ notes }) => {
  const [view, setView] = useState(true);
  let span = view ? "Список" : "Таблица";
  let icon = view ? listIcon : gridIcon;
  const noteListClass = clsx("notes__list", { active: !view });
  return (
    <main className="main">
      <div className="container">
        <div className={noteListClass}></div>
        <div className="notes">
          <div className="notes__top">
            <h2 className="notes__top-title">{notes.length ? 'Все заметки' : 'Нет заметок'}</h2>
            <button className="notes__top-btn" onClick={() => setView(!view)}>
              <img src={icon} alt="" />
              <span>{span}</span>
            </button>
          </div>
          <div className={noteListClass}>
            {notes?.map((item) => (
              <NotesItem view={view} key={item.id} note={item} />
            ))}
          </div>
        </div>
        <div className="container"></div>
      </div>
    </main>
  );
};

export default Notes;
