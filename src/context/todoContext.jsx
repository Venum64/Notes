import { createContext } from "react";
import { Bounce } from "react-toastify";
export const TodoContext = createContext({});

export let setting = {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  };