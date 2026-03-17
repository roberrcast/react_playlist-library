import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { formatSearchQuery } from "../../utilsJS/utils";

export const fetchSongs = createAsyncThunk(
    "search/fetchSongs",
    async (query, { rejectWithValue }) => {
        try {
            const formattedQuery = formatSearchQuery(query);
            const response = await axios.get(
                `/api/v1/json/2/searchalbum.php?s=${formattedQuery}`,
            );
            return response.data.album || [];
        } catch (error) {
            return rejectWithValue(
                "Hubo un error al intentar conseguir los álbumes",
            );
        }
    },
);

const searchSlice = createSlice({
    name: "search",
    initialState: {
        results: [],
        loading: false,
        error: null,
    },

    reducers: {
        // Para limpiar resultados de búsqueda si es necesario
        resetResults: (state) => {
            state.results = [];
            state.loading = false;
            state.error = null;
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchSongs.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(fetchSongs.fulfilled, (state, action) => {
                state.loading = false;
                state.results = action.payload;
            })

            .addCase(fetchSongs.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Error desconocido";
            });
    },
});

export const { resetResults } = searchSlice.actions;
export default searchSlice.reducer;
