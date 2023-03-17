import { useState } from "react";
import { Sub } from "../types";

interface FormState {
  inputValues: Sub;
}

interface FormProps {
  onNewSub: (newSub: Sub) => void;
}

const Form = ({ onNewSub }: FormProps) => {
  const [inputValues, setInputValues] = useState<FormState["inputValues"]>({
    nick: "",
    subMonts: 0,
    avatar: "",
    description: "",
  });
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onNewSub(inputValues);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={inputValues.nick}
          type="text"
          name="nick"
          placeholder="nick"
        ></input>
        <input
          onChange={handleChange}
          value={inputValues.subMonts}
          type="text"
          name="subMonths"
          placeholder="subMonths"
        ></input>
        <input
          onChange={handleChange}
          value={inputValues.avatar}
          type="text"
          name="avatar"
          placeholder="avatar"
        ></input>
        <textarea
          onChange={handleChange}
          value={inputValues.description}
          name="description"
          placeholder="description"
        ></textarea>
        <button>Save new sub</button>
      </form>
    </div>
  );
};

export default Form;
