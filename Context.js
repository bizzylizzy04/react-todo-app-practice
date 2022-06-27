import React, { createContext, useReducer } from 'react';


// addTodo
const addTodo = text => ({
  type: "add_todo",
  payload: {
    value: text,
    id: Date.now(),
    complete: false
  }
});

// removeTodo
const removeTodo = id => ({
  type: "remove_todo",
  payload: id
});

// completeTodo
const completeTodo = id => ({
  type: "complete_todo",
  payload: id
});

// Initial state
const initialstate = [];

const reducer = (state, action) => {
  switch(action.type) {
    case "add_todo":
      return [...state, action.payload]
    case "remove_todo":
      return state.filter(todo => todo.id !== action.payload)
    case "complete_todo":
      return state.map(todo => {
        if(todo.id === action.payload) {
          todo.complete = true;
          return todo;
        }
        return todo;
      });
  }
}

export const MyContext = createContext();

const ContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialstate);
  return (
    <MyContext.Provider value={{state, dispatch, addTodo, removeTodo, completeTodo}}>
      {children}
    </MyContext.Provider>
  );
};

export default ContextProvider;
