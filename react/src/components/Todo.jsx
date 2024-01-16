import { useState } from "react";
import styles from "./Todo.module.css";
function Todo({ text, id, deleteTodo }) {
  const [isChecked, setIsChecked] = useState(false);
  function onCheckedHandler(event) {
    setIsChecked((current) => !current);
  }

  function onDeletedHandler(event) {
    deleteTodo(event.target.parentElement.id);
  }

  return (
    <>
      <li id={id} className={styles.todoList}>
        <span className={styles.check} onClick={onCheckedHandler}>
          {isChecked ? "✔" : "◻"}
        </span>
        <span className={`${styles.text} ${isChecked && styles.isChecked}`}>
          {text}
        </span>
        <span className={styles.delete} onClick={onDeletedHandler}>
          ❌
        </span>
      </li>
    </>
  );
}
export default Todo;
