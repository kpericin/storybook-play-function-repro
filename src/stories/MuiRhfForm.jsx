import { Controller, useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Button } from "@mui/material";

const FormInputText = ({ name, control, label }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <TextField
          helperText={error ? error.message : null}
          size="small"
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          label={label}
          variant="outlined"
        />
      )}
    />
  );
};

const FormWithHookForm = () => {
  const { control, watch, handleSubmit } = useForm({ defaultValues: { textInput: "" }});
  const [submitted, setSubmitted] = useState();
  
  const onSubmit = () => {
    setSubmitted(`Entered text: ${watch("textInput")}`)
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInputText
          name={"textInput"}
          control={control}
          label={"Text Input"}
        />
        <Button type="submit">Submit</Button>
      </form>
      <div>{submitted}</div>
    </>
  );
};

export default FormWithHookForm;
