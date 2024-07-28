import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

export default function Tobe({ tobes, onToggleComplete, onDelete }) {
    return (
        <ul className="mx-8 space-y-4">
            {tobes.map((be) => (
                <li key={be.id} className="relative flex py-2 items-center">
                    <button className="px-1" onClick={() => onToggleComplete(be.id)}>
                        <FontAwesomeIcon className={`${be.isComplete ? "text-green-500" : "text-gray-200"}`} icon={be.isComplete ? faCheckSquare : faSquare} />
                    </button>
                    <span className={`mx-4 w-[85%] text-wrap ${be.isComplete ? 'line-through' : ''}`}>{be.tobe}</span>
                    <button className="absolute right-0" onClick={() => onDelete(be.id)}>
                        <FontAwesomeIcon className="px-2 py-2 bg-gray-200 rounded-full" icon={faTrash} />
                    </button>
                </li>
            ))}
        </ul>
    );
}
