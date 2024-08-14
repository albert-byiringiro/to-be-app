import { configureStore } from "@reduxjs/toolkit";
import tobesReducer from "./features/todoSlicer";

const store = configureStore({
    reducer: {
        tobes: tobesReducer,
    }
});

export default store;