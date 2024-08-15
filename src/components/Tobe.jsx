import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

export default function Tobe({ tobes, editingId, onToggleComplete, onDelete, onEdit, onSave }) {
    const [editValue, setEditValue] = useState("");

    const handleChange = (e) => {
        setEditValue(e.target.value);
    };



    return (
        <ul className="mx-8 space-y-4">
            {tobes.map((be) => (
                <li key={be.id} className="relative flex py-2 items-center">
                    {
                        editingId === be.id ? (
                            <>
                                <input 
                                    type="text" 
                                    value={editValue}
                                    onChange={handleChange}
                                    onBlur={() => onSave(be.id, editValue)}
                                    autoFocus
                                    className="px-2 py-1 border border-gray-300 rounded"
                                />
                                <button
                                    onClick={() => onSave(be.id, editValue)}
                                    className="px-2 py-1 mx-1 bg-green-500 text-white rounded"
                                >
                                    Save
                                </button>
                            
                            </>
                        ) : (
                            <>
                                <button className="px-1" onClick={() => onToggleComplete(be.id)}>
                                    <FontAwesomeIcon className={`${be.isComplete ? "text-green-500" : "text-gray-200"}`} icon={be.isComplete ? faCheckSquare : faSquare} />
                                </button>
                                <span 
                                    className={`mx-4 w-[85%] text-wrap ${be.isComplete ? 'line-through' : ''}`}
                                    onClick={() => {
                                        onEdit(be.id);
                                        setEditValue(be.tobe)
                                    }}
                                >{be.tobe}           
                                </span>
                                <button className="absolute right-0" onClick={() => onDelete(be.id)}>
                                    <FontAwesomeIcon className="px-2 py-2 bg-gray-200 rounded-full" icon={faTrash} />
                                </button>
                            </>
                        )
                    }
                </li>
            ))}
        </ul>
    );
}
