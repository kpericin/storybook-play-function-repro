import React from "react";
import { toast } from "react-toastify";

const Form = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    toast(`Entered text: ${e.target.elements.test.value}`)
  }

  return (
    <>
      <form
        onSubmit={onSubmit}
      >
        <label htmlFor="text-input" >Text Input</label>
          <input id="text-input"  name="test" />
        <input type="submit" />
      </form>
    </>
  );
}

export default Form;
