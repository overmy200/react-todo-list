import React, { use, useEffect, useState } from "react";
import NewTask from "../components/NewTask";
import TodoItems from "../components/TodoItems";
import TheSpinners from "../components/TheSpinners";
import { toast } from "react-toastify";
const Homepage = () => {
  const [todo, setTodo] = useState([]);
  const [loading, setLoading] = useState(false);

  const delay = () => {
    return new Promise((resolve) => setTimeout(resolve, 300));
  };

  const addTask = async (task) => {
    setLoading(true);
    setTodo((prevTodos) => [...prevTodos, task]);
    await delay();
    setLoading(false);
    toast.success("Successfully Added!!");
  };
  const deleteTask = (id) => {
    setTodo((prevTodos) => prevTodos.filter((_, index) => index !== id));
    toast.success("Task has been deleted");
  };

  const updateTask = (task, id) => {
    setTodo((prevTodos) =>
      prevTodos.map((todo, index) => (index === id ? task : todo))
    );
    toast.success("Task has been updated!!");
  };

  

  return (
    <>

      <NewTask addTask={addTask} />

      {loading ? (
        <TheSpinners />
      ) : (
        todo.length > 0 && (
          <ul className="bg-gray-200 p-4 rounded-md shadow-sm">
            {todo.map((todo, index) => (
              <TodoItems
                key={index}
                id={index}
                todo={todo}
                updateTask={updateTask}
                deleteTask={deleteTask}
              />
            ))}
          </ul>
        )
      )}
    </>
  );
};

export default Homepage;
