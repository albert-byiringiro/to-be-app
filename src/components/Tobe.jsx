/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { useTheme } from "../features/ThemeContext"

export default function Tobe({ tobes, editingId, onToggleComplete, onDelete, onEdit, onSave }) {
    const [editValue, setEditValue] = useState("");
    const theme = useTheme();

    const handleChange = (e) => {
        setEditValue(e.target.value);
    };



    return (
        <ul className="mx-8 space-y-4">
            {tobes.map((be) => (
                <li 
                key={be.id} 
                className={`flex justify-between items-center my-2 ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'} p-2 rounded`}
                >
                    {
                        editingId === be.id ? (
                            <>
                                <input 
                                    type="text" 
                                    value={editValue}
                                    onChange={handleChange}
                                    onBlur={() => onSave(be.id, editValue)}
                                    autoFocus
                                    className={`px-2 py-1 border rounded ${theme === 'dark' ? 'bg-gray-600 border-gray-500 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                                />
                                <button
                                    onClick={() => onSave(be.id, editValue)}
                                    className={`px-2 py-1 mx-1 rounded ${theme === 'dark' ? 'bg-green-600 text-white' : 'bg-green-500 text-white'}`}
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
                                    className={`cursor-pointer ${be.isComplete ? 'line-through' : ''}`}
                                    onClick={() => {
                                        onEdit(be.id);
                                        setEditValue(be.tobe);
                                    }}
                                >{be.tobe}           
                                </span>
                                <button 
                                className="" 
                                onClick={() => onDelete(be.id)}>
                                    <FontAwesomeIcon 
                                    className={`px-2 py-1 mx-1 rounded ${theme === 'dark' ? 'bg-red-600 text-white' : 'bg-red-500 text-white'}`} 
                                    icon={faTrash} />
                                </button>
                            </>
                        )
                    }
                </li>
            ))}
        </ul>
    );
}
