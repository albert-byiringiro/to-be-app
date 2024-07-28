import Tobe from "./components/Tobe";

// import './App.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';


function App() {

  return (
    <main className="">
      <h1 className="my-6 font-bold text-center text-gray-200 text-8xl">todos</h1>
      <form className="mx-8 my-6">
        <label htmlFor="tobe-input" className="relative">
          
        <input type="text" id="tobe-input" className="w-full px-4 py-3 text-gray-900 placeholder-gray-900 border-2 border-gray-300 rounded-full shadow-lg" placeholder="Add tobe..."  />
        <button className="">
        <FontAwesomeIcon className="absolute top-1 right-6" icon={faPlusCircle} />
        </button>
        </label>
      </form>
      <Tobe/>
    </main>
  )
}

export default App
