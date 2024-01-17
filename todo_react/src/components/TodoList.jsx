import Todo from "./Todo";
import NewTodo from "./NewTodo";
import styles from "./TodoLlist.module.css";

import { useState } from "react";
function TodoList() {
  const [toDos, setToDos] = useState([]);
  function addTodo(toDo) {
    setToDos((current) => [
      { text: toDo, id: String(Date.now()), isCompleted: false },
      ...current,
    ]);
  }

  function checkTodo(id, isChecked) {
    setToDos((current) =>
      current.map((item) =>
        item.id === id ? { ...item, isCompleted: isChecked } : item
      )
    );
  }

  function deleteTodo(id) {
    setToDos((current) => current.filter((item) => item.id !== id));
  }

  return (
    <section className={styles.wrapper}>
      <NewTodo addTodo={addTodo} />
      <div className={styles.remainedTodo}>
        <span className={styles.remainedToDoCount}>
          {`${
            toDos.filter((item) => item.isCompleted === false).length
          }개 남음`}
        </span>
      </div>
      <ul className={styles.toDoContainer}>
        {toDos.map((item) => {
          return (
            <Todo
              checkTodo={checkTodo}
              deleteTodo={deleteTodo}
              key={item.id}
              id={item.id}
              text={item.text}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default TodoList;
