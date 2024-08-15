import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todoSlicer";

const store = configureStore({
    reducer: {
        todos: todoReducer,
    }
});

export default store;