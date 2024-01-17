import { useState } from "react";
import styles from "./Todo.module.css";
import deleteIcon from "../assets/deleteIcon.png";

function Todo({ text, id, deleteTodo, checkTodo }) {
  const [isChecked, setIsChecked] = useState(false);
  function onCheckedHandler(event) {
    setIsChecked((current) => {
      checkTodo(event.target.parentElement.id, !current);
      return !current;
    });
  }

  function onDeletedHandler(event) {
    deleteTodo(event.target.parentElement.parentElement.id);
  }

  return (
    <>
      <li id={id} className={styles.todoList}>
        <input
          id={`checkbox-${id}`}
          className={styles.hiddenCheck}
          onClick={onCheckedHandler}
        />
        <label className={styles.check} htmlFor={`checkbox-${id}`}>
          {isChecked ? "✔" : "◻"}
        </label>
        <div className={`${styles.text} ${isChecked && styles.isChecked}`}>
          {text}
        </div>
        <button className={styles.delete} onClick={onDeletedHandler}>
          <img
            className={styles.deleteIcon}
            src={deleteIcon}
            alt="deleteIcon"
          />
        </button>
      </li>
    </>
  );
}
export default Todo;
