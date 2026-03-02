import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        library: libraryReducer,
        search: searchReducer,
    },
});

export default store;
