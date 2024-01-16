import { useState } from "react";
import styles from "./NewTodo.module.css";
function NewTodo({ addTodo }) {
  const [textTodo, setTextTodo] = useState("");

  function addButtonHandeler(event) {
    event.preventDefault();
    if (textTodo) {
      addTodo(textTodo);
      setTextTodo("");
    }
  }

  function onChangeTextHandler(event) {
    setTextTodo(event.target.value);
  }

  return (
    <>
      <form>
        <input
          required
          type="text"
          value={textTodo}
          onChange={onChangeTextHandler}
        />
        <button onClick={addButtonHandeler}>ADD</button>
      </form>
    </>
  );
}
export default NewTodo;
