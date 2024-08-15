import { useEffect, useState } from 'react';
import Tobe from './components/Tobe';
import { useTheme } from "./features/ThemeContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, saveTodo, startEditing, toggleComplete } from './features/todoSlicer'; import "./features/todoSlicer";
import { nanoid } from 'nanoid';

function App() {

  const [todo, setTodo] = useState("");
  const tobes = useSelector((state) => state.todos.tobes);
  const editingId = useSelector(state => state.todos.editingId);
  const dispatch = useDispatch();
  const { theme, toggleTheme } = useTheme();

  // useEffect(() => {
  //   // Save tobes to localStorage whenever it changes
  //   localStorage.setItem('tobes', JSON.stringify(tobes));
  // }, [tobes]);

  const handleInput = (e) => {
    setTodo(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (todo.trim() === '') return; 
    
    const newTodo = {
      id: nanoid(),
      tobe: todo,
      isComplete: false,
    }

      dispatch(addTodo(newTodo))

    setTodo(''); // Clear the input field after submission
  };

  const handleToggleComplete = (id) => {
    dispatch(toggleComplete(id))
  }

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  }

  const handleEdit = (id) => {
    dispatch(startEditing(id));
  }

  const handleSave = (id, newValue) => {
    dispatch(saveTodo({ id, newValue }))
  }

  return (
    <main className={`container max-h-screen mx-auto p-4 ${theme === "dark" ? "bg-gray-800 text-white": "bg-white text-gray-900"}`}>
      <div className="flex justify-between items-center">
        <h1 
          className={`my-6 font-bold text-center text-4xl ${theme === "dark" ? "text-white" : "text-gray-800"}`}
        >todos</h1>
        <button onClick={toggleTheme} className={`px-4 py-2 rounded ${theme === "dark" ? "bg-gray-700 text-gray-100" : "bg-gray-300 text-gray-800"}`}>Toggle {theme === "dark" ? "Light" : "Dark"}</button>
      </div>
      <form className="mx-8 my-6" onSubmit={handleSubmit}>
        <label htmlFor="tobe-input" className="relative flex items-center">
          <input
            type="text"
            id="tobe-input"
            className={`w-full px-4 py-2 text-gray-900 placeholder-gray-600 border-2 border-gray-300 rounded-full shadow-lg ${theme === "dark" ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-gray-900"}`}
            placeholder="Add tobe..."
            value={todo}
            onChange={handleInput}
          />
          <button type="submit" className="absolute right-4">
            <FontAwesomeIcon className="text-xl text-green-700" icon={faPlusCircle} />
          </button>
        </label>
      </form>

      {tobes.length === 0 ? (
        <p className="text-center text-gray-600">No tasks available</p>
      ) : (
        <Tobe 
          tobes={tobes} 
          editingId={editingId}
          onToggleComplete={handleToggleComplete} 
          onDelete={handleDelete}
          onEdit={handleEdit}
          onSave={handleSave}
        />
      )}
    </main>
  );
}

export default App;
