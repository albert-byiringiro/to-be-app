import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

// const initialValue = () => {
//     const savedTobes = localStorage.getItem("tobes");
//     return savedTobes ? JSON.parse(savedTobes) : [];
// }

const initialState = {
    tobes: [],
    editingId: null,
}

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.tobes.push(action.payload);
        },
        toggleComplete: (state, action) => {
            const todo = state.find(tobe => tobe.id === action.payload);
            if (todo) {
                todo.isComplete = !todo.isComplete;
            }
        },
        
        deleteTodo: (state, action) => {
            state.tobes = state.tobes.filter(tobe => tobe.id !== action.payload)
        },
        
        
        startEditing: (state, action) => {
            state.editingId = action.payload;
        },

        saveTodo: (state, action) => {
            const { id, newValue} = action.payload;
            const todo = state.tobes.find(tobe => tobe.id === id);
            if(todo){
                todo.tobe = newValue;
            }
            state.editingId = null; // reset editing after saving
        }
    }
})

export const { addTodo,toggleComplete, deleteTodo } = todosSlice.actions;

export default todosSlice.reducer;