import Navbar from "./components/Navbar.jsx";
import Notes from "./components/notes.jsx";
import editIcon from "./assets/img/edit.svg";
import { useState } from "react";
import Modal from "./components/Modal.jsx";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "html",
      desc: "This desc html",
      date: new Date().toLocaleDateString(),
    },
    {
      id: 2,
      title: "css",
      desc: "This desc css",
      date: new Date().toLocaleDateString(),
    },
    {
      id: 3,
      title: "react",
      desc: "This desc react",
      date: new Date().toLocaleDateString(),
    },
  ]);
  const addNoteHandler = (note) => {
    setNotes([...notes, note]);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Navbar />
      <Notes notes={notes} />
      {isModalOpen && <Modal closeModal={closeModal} addNote={addNoteHandler}/>}
      {!isModalOpen && (
        <button className="addBtn" onClick={() => setIsModalOpen(true)}>
          <img src={editIcon} alt="" />
        </button>
      )}
    </>
  );
};

export default App;
