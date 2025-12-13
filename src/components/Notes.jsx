import React, { useState } from "react";
import listIcon from "../assets/img/list.svg";
import gridIcon from "../assets/img/grid.svg";
import clsx from "clsx";
import NotesItem from "./NotesItem";
const Notes = () => {
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
            <h2 className="notes__top-title">Все заметки</h2>
            <button className="notes__top-btn" onClick={() => setView(!view)}>
              <img src={icon} alt="" />
              <span>{span}</span>
            </button>
          </div>
          <div className={noteListClass}>
            <NotesItem view={view} />
            <NotesItem view={view} />
            <NotesItem view={view} />
            <NotesItem view={view} />
            <NotesItem view={view} />
            <NotesItem view={view} />
          </div>
        </div>
        <div className="container"></div>
      </div>
    </main>
  );
};

export default Notes;
