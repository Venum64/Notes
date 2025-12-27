import React, { useContext, useState } from "react";
import searchIcon from "../assets/img/serch.svg";
import backIcon from "../assets/img/back.svg";
import resetIcon from "../assets/img/reset.svg";
import { TodoContext } from "../context/todoContext";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const { search, setSearch } = useContext(TodoContext);
  const backNavbar = () => {
    setShow(true);
    setSearch("");
  };
  return (
    <header className="header">
      <nav className="header__nav">
        {show ? (
          <>
            <button className="header__nav-lang">RU</button>
            <h1 className="header__nav-title">Заметки</h1>
            <button
              className="header__nav-search"
              onClick={() => setShow(false)}
            >
              <img src={searchIcon} alt="" />
            </button>
          </>
        ) : (
          <>
            <button className="header__nav-back" onClick={() => backNavbar()}>
              <img src={backIcon} alt="" />
            </button>
            <input
              type="text"
              className="header__nav-input"
              placeholder="Поиск..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button className="header__nav-back" onClick={() => setSearch("")}>
              <img src={resetIcon} alt="" />
            </button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;