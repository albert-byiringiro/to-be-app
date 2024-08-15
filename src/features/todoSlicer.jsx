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
        
    }
})

export const { addTodo,toggleComplete, deleteTodo } = todosSlice.actions;

export default todosSlice.reducer;