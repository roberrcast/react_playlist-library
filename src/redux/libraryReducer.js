import { ADD_SONG, REMOVE_SONG } from "./actionTypes";

const initialState = [];

const libraryReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SONG:
            // Se revisa si la canción existe en la librera, para evitar duplicados
            const exists = state.find((song) => song.id === action.payload.id);
            if (exists) return state;

            // Regresa un nuevo array con canciones viejas + la nueva
            return [...state, action.payload];

        case REMOVE_SONG:
            // Regresa un nuevo array filtrado para excluir el ID en el payload
            return state.filter((song) => song.id !== action.payload);

        default:
            return state;
    }
};

export default libraryReducer;
