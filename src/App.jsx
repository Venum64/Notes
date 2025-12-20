import Navbar from "./components/Navbar.jsx";
import Notes from "./components/notes.jsx";
import editIcon from "./assets/img/edit.svg";
import { useState } from "react";
import Modal from "./components/Modal.jsx";
import { ToastContainer } from "react-toastify";

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
  const [isEdit, setIsEdit] = useState(false);

  const [editNote, setEditNote] = useState(null);
  const addOrChangeNoteHandler = (note) => {
    if (editNote?.id) {
      const updateNotes = notes.map((item) => {
        if (item.id == note.id) {
          return note;
        }
        return item;
      });
      setNotes(updateNotes);
    } else {
      setNotes([...notes, note]);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsEdit(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
    setIsEdit(false);
    setEditNote(null);
  };
  const changeHandler = (note) => {
    setIsModalOpen(true);
    setIsEdit(true);
    setEditNote(note);
  };

  return (
    <>
      <Navbar />
      <Notes notes={notes} changeHandler={changeHandler} />

      {isModalOpen && (
        <Modal
          closeModal={closeModal}
          addOrChange={addOrChangeNoteHandler}
          isEdit={isEdit}
          editNote={editNote}
        />
      )}
      {!isModalOpen && (
        <button className="addBtn" onClick={() => openModal()}>
          <img src={editIcon} alt="" />
        </button>
      )}
      <ToastContainer/>
    </>
  );
};

export default App;
