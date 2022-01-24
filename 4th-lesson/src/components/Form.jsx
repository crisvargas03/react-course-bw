import React from "react";
import { useForm } from "../hooks/useForm";
import Swal from "sweetalert2";

const Form = ({ setCharacterName }) => {
  const [inputs, handleChange, reset] = useForm({
    characterName: "",
  });

  const { characterName } = inputs;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!characterName.trim()) {
      return Swal.fire({
        title: "Ups!!",
        text: `Write Something Please`,
        icon: "warning",
        iconColor: "orange",
      });
    }
    setCharacterName(characterName.trim().toLowerCase());

    reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a character"
        className="form-control mb-2 mt-4"
        value={characterName}
        onChange={handleChange}
        name="characterName"
      />

      <button type="submit" className="btn btn-outline-success">
        Search Character
      </button>
    </form>
  );
};

export default Form;
