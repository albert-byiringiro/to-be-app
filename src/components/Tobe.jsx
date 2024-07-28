import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare, faTrash } from '@fortawesome/free-solid-svg-icons';


export default function Tobe() {
    return(
        <ul className="mx-8 space-y-4">
            <li className="relative flex py-2">
                <button  className="px-1">
                <FontAwesomeIcon icon={faSquare} />
                </button>
                <span className="mx-4 w-[85%]">IamHere</span>
                <button className="absolute right-0 ">
                <FontAwesomeIcon className="px-2 py-2 bg-gray-200 rounded-full" icon={faTrash} /> 
                </button>
            </li>
        </ul>
    )
}