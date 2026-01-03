import React, { useContext, useState } from "react";
import listIcon from "../assets/img/list.svg";
import gridIcon from "../assets/img/grid.svg";
import clsx from "clsx";
import NotesItem from "./NotesItem";
import { TodoContext } from "../context/todoContext";
import { useTranslation } from "react-i18next";

const Notes = ({ notes }) => {
  const { t } = useTranslation();
  const [view, setView] = useState(true);
  let span = view ? t('list') : t("grid");
  let icon = view ? listIcon : gridIcon;
  const noteListClass = clsx("notes__list", { active: !view });
  const { search } = useContext(TodoContext);

  return (
    <main className="main">
      <div className="container">
        <div className={noteListClass}></div>
        <div className="notes">
          <div className="notes__top">
            <h2 className="notes__top-title">
              {notes.length && search.length > 0
                ? t('search')
                : notes.length
                ? t('allNotes')
                : t('noNotes')}
            </h2>
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
