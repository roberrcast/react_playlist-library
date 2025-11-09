import React, { useState, useEffect, useRef } from "react";
import { songData } from "./data/songInfo.js";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Display from "./components/Display";

function App() {
    //Estado para la búsqueda
    const [searchQuery, setSearchQuery] = useState("");

    //Estado para inicializar qué canciones se muestran
    const [songsToDisplay, setSongsToDisplay] = useState([]);

    //Estado para la librería del usuario
    const [librarySongs, setLibrarySongs] = useState([]);

    //Función para la búsqueda de canciones en Sidebar
    const handleSearchQuery = (query) => {
        setSearchQuery(query);

        if (query) {
            const filteredSongs = songData.filter(
                (song) =>
                    song.title.toLowerCase().includes(query.toLowerCase()) ||
                    song.artist.toLowerCase().includes(query.toLowerCase()) ||
                    song.album.toLowerCase().includes(query.toLowerCase()),
            );

            setSongsToDisplay(filteredSongs);
        } else {
            setSongsToDisplay([]);
        }
    };

    //Función para añadir canciones a la librería del usuario
    const handleAddToLibrary = (song) => {
        setLibrarySongs((prevSongs) => {
            const songAlreadyExists = prevSongs.some((s) => s.id === song.id);

            if (songAlreadyExists) {
                return prevSongs;
            } else {
                return [...prevSongs, song];
            }
        });
    };

    //Función para remover una canción de la librería
    const handleDeleteFromLibrary = (idToDelete) => {
        setLibrarySongs((prevSongs) =>
            prevSongs.filter((song) => song.id !== idToDelete),
        );
    };

    //Función para limpiar el search query del searchbox y mostrar la biblioteca del usuario cuando se hace click al nombre de la playlist en Sidebar ("Playlist 1")
    const handleShowLibrary = () => {
        setSearchQuery("");
        setSongsToDisplay([]);
    };

    const isInitialMount = useRef(true);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            console.log("La biblioteca se ha actualizado");
        }
    }, [librarySongs]);

    return (
        <div className="app">
            <Header title="Biblioteca" />

            <main>
                <Sidebar
                    onSearch={handleSearchQuery}
                    onShowLibrary={handleShowLibrary}
                />

                <Display
                    songsToDisplay={songsToDisplay}
                    librarySongs={librarySongs}
                    searchQuery={searchQuery}
                    onAddToLibrary={handleAddToLibrary}
                    onDeleteFromLibrary={handleDeleteFromLibrary}
                />
            </main>
        </div>
    );
}

export default App;
