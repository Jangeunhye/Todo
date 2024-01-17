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
      <form className={styles.todoForm}>
        <input
          placeholder="오늘의 할 일을 입력하세요!"
          className={styles.todoInput}
          required
          type="text"
          value={textTodo}
          onChange={onChangeTextHandler}
        />
        <button className={styles.addButton} onClick={addButtonHandeler}>
          ADD
        </button>
      </form>
    </>
  );
}
export default NewTodo;
