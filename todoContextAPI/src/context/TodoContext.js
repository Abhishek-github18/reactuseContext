import { createContext, useContext } from "react";

// creating a context
export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Todo Msg",
      completed: false,
    },
  ],
  //   to add todo in the state
  addTodo: (todo) => {},
  //   updating the todo
  updateTodo: (id, todo) => {},
  //   deleting the todo
  deleteTodo: (id) => {},
  //   check and uncheck the todo completed or not
  toggleComplete: (id) => {},
});
// default state of the context basically it is an array of objects

// TodoProvider will wrap all the components at the App.jsx with value prop
export const TodoProvider = TodoContext.Provider;

// custom hook so that we dont have to import use things at different places
export const useTodo = () => {
  return useContext(TodoContext);
};
