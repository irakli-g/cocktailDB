import React from "react";
import { useGlobalContext } from "../Context";

export const Form = () => {
  const { setSearchTerm } = useGlobalContext();
  const input = React.createRef();

  const inputChange = () => {
    const value = input.current.value;
    setSearchTerm(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form action="#" onSubmit={handleSubmit}>
      <div className="form-control">
        <input
          type="text"
          placeholder="type cocktail name"
          ref={input}
          onChange={inputChange}
        />
      </div>
    </form>
  );
};
