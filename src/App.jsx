import Navbar from "./components/Navbar.jsx";
import Notes from "./components/notes.jsx";
import editIcon from "./assets/img/edit.svg";
import { useState } from "react";
import Modal from "./components/Modal.jsx";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Navbar />
      <Notes />
      {isModalOpen && <Modal closeModal={closeModal} />}
      {!isModalOpen && (
        <button className="addBtn" onClick={() => setIsModalOpen(true)}>
          <img src={editIcon} alt="" />
        </button>
      )}
    </>
  );
};

export default App;
