import React, { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Sidebar from "./components/Sidebar";
import Display from "./components/Display";
import { Route, Routes } from "react-router-dom";
import { useNavigate, useSearchParams } from "react-router-dom";
import { formatSearchQuery } from "./utilsJS/utils.js";
import useFetchAlbum from "./hooks/useFetchAlbum.js";

function App() {
    //Variable para la navegación
    const navigate = useNavigate();

    //Hook para guardar el parámetro de búsqueda y evitar que se limpie el search query con el botón de recarga del
    //navegador
    const [searchParams, setSearchParams] = useSearchParams();

    //Función para leer el search query directamente de la URL (que hará que recargar la página
    //no afecte el renderizado)
    const queryFromURL = searchParams.get("q") || "";

    //Custom hook para hacer llamadas a la API
    const { albums, isLoading, error } = useFetchAlbum(queryFromURL);

    //Estado para la librería del usuario
    const [librarySongs, setLibrarySongs] = useState([]);

    //Función para la búsqueda de canciones en Sidebar
    const handleSearchQuery = (rawQuery) => {
        const formattedQuery = formatSearchQuery(rawQuery);

        navigate(`/search-results?q=${formattedQuery}`);
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
    // const handleShowLibrary = () => {
    //     navigate("/library");
    // };

    //Variable para decirle a useEffect que es el primer render y que no haga el console.log
    const isInitialMount = useRef(true);

    //useEffet para imprimir en la consola cada vez que la biblioteca se actualice
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
                <Routes>
                    <Route
                        path="/"
                        element={<SearchBar onSearch={handleSearchQuery} />}
                    />

                    <Route
                        path="/search-results"
                        element={
                            <>
                                <Sidebar
                                    onSearch={handleSearchQuery}
                                    /* onShowLibrary={handleShowLibrary} */
                                    searchQuery={queryFromURL}
                                />
                                <Display
                                    albums={albums}
                                    isLoading={isLoading}
                                    error={error}
                                    librarySongs={librarySongs}
                                    searchQuery={queryFromURL}
                                    onAddToLibrary={handleAddToLibrary}
                                    onDeleteFromLibrary={
                                        handleDeleteFromLibrary
                                    }
                                />
                            </>
                        }
                    />
                </Routes>
            </main>
        </div>
    );
}

export default App;
