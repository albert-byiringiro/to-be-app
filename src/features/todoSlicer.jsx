import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialValue = () => {
    const savedTobes = localStorage.getItem("tobes");
    return savedTobes ? JSON.parse(savedTobes) : [];
}

const tobesSlice = createSlice({
    name: "tobes",
    initialState: initialValue(),
    reducers: {
        addTobe: (state, action) => {
            const newTobe = {
                id: nanoid(),
                tobe: action.payload,
                isComplete: false,
            };
            state.push(newTobe);
        },
        toggleComplete: (state, action) => {
            const tobe = state.find(tobe => tobe.id === action.payload);
            if (tobe) {
                tobe.isComplete = !tobe.isComplete;
            }
        },
        
        deleteTobe: (state, action) => {
            return state.filter(tobe => tobe.id !== action.payload)
        }
        
    }
})

export const { addTobe,toggleComplete, deleteTobe } = tobesSlice.actions;

export default tobesSlice.reducer;