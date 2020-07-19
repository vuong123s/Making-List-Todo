import React, { useState } from "react";
import "./styles.css";
import TodoForm from "./todoForm";

function RanderList(props) {
  const { todos, onClickTodo } = props;

  function getTodo(item) {
    if (onClickTodo) {
      onClickTodo(item);
    }
  }

  return (
    <ul>
      {todos.map(item => (
        <li key={item.id} onClick={() => getTodo(item)}>
          {item.title}
        </li>
      ))}
    </ul>
  );
}

export default function App() {
  const [list, setList] = useState([
    { id: 1, title: "I love Easy Frontend!" },
    { id: 2, title: "We love Easy Frontend!" },
    { id: 3, title: "They love Easy Frontend!" }
  ]);

  function DeleteList(item) {
    const findItem = list.findIndex(i => i.id === item.id);
    console.log(findItem);
    const newTodoList = [...list];
    newTodoList.splice(findItem, 1);
    setList(newTodoList);
  }

  function HandingTodoListSubmit(DataSubmit) {
    console.log(DataSubmit);
    const newTodo = {
      id: list.length + 1,
      ...DataSubmit
    };

    const newTodoList = [...list];
    newTodoList.push(newTodo);
    setList(newTodoList);
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <TodoForm onSubmit={HandingTodoListSubmit} />
      <RanderList todos={list} onClickTodo={DeleteList} />
    </div>
  );
}
