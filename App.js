import React, { useContext, useRef } from "react";
import {MyContext} from "./Context";

export default function App() {
  const {state, dispatch, addTodo, removeTodo, completeTodo} = useContext(MyContext);
  const inputRef = useRef();
  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Enter a task"></input>
      <button onClick={() => {
        dispatch(addTodo(inputRef.current.value));
        inputRef.current.value = "";
        }}>
        Submit
      </button>
      <ul>
        {state.map(todo => (
          <li key={todo.id}>
            {todo.complete ? <i><b>{todo.value}</b></i> : todo.value}
            <button onClick={() => dispatch(completeTodo(todo.id))}>
              Complete
            </button>
            <button onClick={() => dispatch(removeTodo(todo.id))}>
              Remove
            </button>
          </li>
          ))}
      </ul>
    </div>
  );
}
