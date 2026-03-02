import { createSlice } from "@reduxjs/toolkit";

const librarySlice = createSlice({
    name: "library",
    initialState: [],
    reducers: {
        addSong: (state, action) => {
            const exists = state.find((song) => song.id === action.payload.id);
            if (!exists) {
                state.push(action.payload);
            }
        },

        removeSong: (state, action) => {
            return state.filter((song) => song.id !== action.payload);
        },
    },
});

export const { addSong, removeSong } = librarySlice.actions;

export default librarySlice.reducer;
