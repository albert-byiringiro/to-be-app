import { useEffect, useState } from 'react';
import Tobe from './components/Tobe';
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

  // useEffect(() => {
  //   // Save tobes to localStorage whenever it changes
  //   localStorage.setItem('tobes', JSON.stringify(tobes));
  // }, [tobes]);

  const handleInput = (e) => {
    setTodo(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (todo.trim() === '') return; // Prevent adding empty todos

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
            <FontAwesomeIcon className="text-xl text-green-700" icon={faPlusCircle} />
          </button>
        </label>
      </form>

      {/* Render the list of todos */}
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
