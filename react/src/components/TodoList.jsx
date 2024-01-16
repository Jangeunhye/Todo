import Todo from "./Todo";
import NewTodo from "./NewTodo";
import styels from "./TodoLlist.module.css";

import { useState } from "react";
function TodoList() {
  const [toDos, setToDos] = useState([]);
  function addTodo(toDo) {
    setToDos((current) => [{ text: toDo, id: Date.now() }, ...current]);
  }

  function deleteTodo(id) {
    setToDos((current) => current.filter((item) => item.id != id));
  }

  return (
    <section>
      <NewTodo addTodo={addTodo} />
      <ol>
        {toDos.map((item) => {
          return (
            <Todo
              deleteTodo={deleteTodo}
              key={item.id}
              id={item.id}
              text={item.text}
            />
          );
        })}
      </ol>
    </section>
  );
}

export default TodoList;
