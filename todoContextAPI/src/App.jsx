import "./App.css";
import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import { TodoProvider } from "./context/TodoContext";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  // const updateTodo = (id, todo) => {
  //   // debugger;
  //   setTodos((prev) => {
  //     prev.map((prevTodo) => {
  //       if (prevTodo.id === id) {
  //         // debugger;
  //         // prevTodo.todo = todo;
  //         console.log(prevTodo);
  //         console.log(todo);
  //         prevTodo.todo = todo.todo;
  //         console.log(prevTodo);
  //         // debugger;
  //       }
  //     });
  //   });
  //   console.log(todos);
  // };

  // OR THE SAME LOGIC CAN WORK IN THIS WAY ALSO

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => {
     return (prevTodo.id === id ? todo : prevTodo)
    }));
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
  };

  const toggleComplete = (id) => {
    // debugger;
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, complete: !prevTodo.complete }
          : prevTodo
      )
    );
    // debugger;
  };

  useEffect(() => {
    // debugger;
    const todos1 = JSON.parse(localStorage.getItem("todosList"));

    // debugger;
    if (todos1 && todos1.length > 0) {
      setTodos(todos1);
    }
  }, []);

  useEffect(() => {
    console.log("todos is changed");
    console.log(todos);
    localStorage.setItem("todosList", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos &&
              todos.map((todo) => (
                <div key={todo.id} className="w-full">
                  <TodoItem todo={todo} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
