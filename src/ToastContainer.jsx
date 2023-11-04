import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer as ToastifyContainer } from "react-toastify";

const ToastContainer = () => {
  return (
    <ToastifyContainer
      theme="light"
      closeOnClick
      position={toast.POSITION.TOP_RIGHT}
      autoClose={5000}
    />
  );
};

export default ToastContainer;
