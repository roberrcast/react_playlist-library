import React, { useState } from "react";
import songData from "./data/songInfo";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Display from "./components/Display";

function App() {
    const [searchQuery, setSearchQuery] = useState("");

    const [songsToDisplay, setSongsToDisplay] = useState([]);

    const [librarySongs, setLibrarySongs] = useState([]);

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

    return (
        <div className="app">
            <Header title="Biblioteca" />

            <main>
                <Sidebar onSearch={handleSearchQuery} />

                <Display
                    songsToDisplay={songsToDisplay}
                    librarySongs={librarySongs}
                    searchQuery={searchQuery}
                />
            </main>
        </div>
    );
}

export default App;
