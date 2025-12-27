import Navbar from "./components/Navbar.jsx";
import Notes from "./components/Notes.jsx";
import editIcon from "./assets/img/edit.svg";
import { useEffect, useState } from "react";
import Modal from "./components/Modal.jsx";
import { ToastContainer } from "react-toastify";
import { TodoContext } from "./context/todoContext";

const App = () => {
  const setLS = () => {
    localStorage.notes = JSON.stringify(notes);
  };
  const getLS = () =>
    localStorage.notes ? JSON.parse(localStorage.notes) : [];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notes, setNotes] = useState(getLS());
  const [search, setSearch] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [editNote, setEditNote] = useState(null);

  const filterNotes = notes.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );
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

  const delNote = (id) => {
    const filterNotes = notes.filter((item) => item.id != id);
    setNotes(filterNotes);
  };
  useEffect(() => {
    setLS();
  }, [notes]);
  return (
    <>
      <TodoContext
        value={{
          addOrChangeNoteHandler,
          closeModal,
          changeHandler,
          delNote,
          search,
          setSearch,
        }}
      >
        <Navbar />
        <Notes notes={filterNotes} />

        {isModalOpen && <Modal isEdit={isEdit} editNote={editNote} />}
        {!isModalOpen && (
          <button className="addBtn" onClick={() => openModal()}>
            <img src={editIcon} alt="" />
          </button>
        )}
        <ToastContainer />
      </TodoContext>
    </>
  );
};

export default App;
