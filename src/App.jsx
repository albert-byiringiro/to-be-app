import React, { useState } from 'react';

import Tobe from "./components/Tobe"; // Ensure the correct path to Tobe component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';



function App() {
  const [todo, setTodo] = useState("");
  const [tobes, setTobes] = useState([]);

  const handleInput = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo.trim() === "") return; // Prevent adding empty todos

    setTobes(prevTobes => [...prevTobes, todo]);
    setTodo(""); // Clear the input field after submission
  };

  return (
    <main className="container mx-auto p-4">
      <h1 className="my-6 font-bold text-center text-gray-800 text-4xl">todos</h1>
      <form className="mx-8 my-6" onSubmit={handleSubmit}>
        <label htmlFor="tobe-input" className="relative flex items-center">
          <input 
            type="text" 
            id="tobe-input" 
            className="w-full px-4 py-2 text-gray-900 placeholder-gray-600 border-2 border-gray-300 rounded-full shadow-lg"
            placeholder="Add tobe..."
            value={todo}
            onChange={handleInput}
          />
          <button type="submit" className="absolute right-4">
            <FontAwesomeIcon className="text-xl" icon={faPlusCircle} />
          </button>
        </label>
      </form>
      <Tobe tobes={tobes} />
    </main>
  );
}

export default App;
