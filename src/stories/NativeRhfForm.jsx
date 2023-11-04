import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Form = () => {
  const { handleSubmit, register } = useForm({ defaultValues: { textInput: "" } });
  
  const onSubmit = async (data) => {
    console.log(data);
    toast(`Entered text: ${data.textInput}`);
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="text-input">Text Input</label>
        <input id="text-input" {...register("textInput")} />
        <input type="submit" />
      </form>
    </>
  );
}

export default Form;
