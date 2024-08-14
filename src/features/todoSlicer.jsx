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
        }
    }
})

export const { addTobe } = tobesSlice.actions;

export default tobesSlice.reducer;