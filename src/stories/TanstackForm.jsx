import React from "react";
import { toast } from "react-toastify";
import { useForm } from '@tanstack/react-form'

const Form = () => {
    const form = useForm({
        defaultValues: {
            textInput: '',
        },
        onSubmit: async ({ value }) => {
      
            console.log(value);
            toast(`Entered text: ${value.textInput}`);
        },
    });

  return (
    <form.Provider>
      <form
       onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            void form.handleSubmit();
        }}
      >
        <label htmlFor="text-input">Text Input</label>
        <form.Field
            name="textInput"
            children={(field) => (
                <input
                    id="text-input"
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                />
            )}
        />
        <button type="submit">Submit</button>
      </form>
    </form.Provider>
  );
}

export default Form;
