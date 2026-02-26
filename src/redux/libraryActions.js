import { ADD_SONG, REMOVE_SONG } from "./actionTypes";

export const addSong = (song) => ({
    type: ADD_SONG,
    payload: song,
});

export const removeSong = (songId) => ({
    type: REMOVE_SONG,
    payload: songId,
});
