import { configureStore } from "@reduxjs/toolkit";
import libraryReducer from "./slices/librarySlice";
import searchSlice from "./slices/searchSlice";

const store = configureStore({
    reducer: {
        library: libraryReducer,
        search: searchSlice,
    },
});

export default store;
