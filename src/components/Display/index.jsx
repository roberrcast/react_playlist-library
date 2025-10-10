import React, { useState } from "react";
import { songList } from "../../songInfo";
import Song from "../Song";
import "./Display.scss";

const Display = () => {
    const [defaultSong, setSong] = useState(songList[0]);

    const handleSongClick = (song) => {
        setSong(song);
    };

    return (
        <>
            <article className="display">
                <div className="display__inner">
                    <section className="display__showcase">
                        <div className="display__album-art">
                            <img
                                src={defaultSong.albumArt}
                                alt={defaultSong.alt}
                                className="display__album-img"
                            />
                        </div>

                        <div className="display__info">
                            <h3 className="display__title">
                                {defaultSong.title}
                            </h3>

                            <p className="display__band">
                                {defaultSong.artist}
                            </p>
                        </div>
                    </section>

                    <section className="display__playlist">
                        <div className="display__grid">
                            <h4 className="display__grid-item"></h4>

                            <h4 className="display__grid-item">song</h4>

                            <h4 className="display__grid-item">artist</h4>

                            <h4 className="display__grid-item">album</h4>

                            <h4 className="display__grid-item">time</h4>

                            {songList.map((song) => (
                                <div
                                    className="display__grid-row"
                                    key={song.id}
                                    onClick={() => handleSongClick(song)}
                                >
                                    <Song
                                        id={song.id}
                                        album={song.album}
                                        artist={song.artist}
                                        title={song.title}
                                        time={song.length}
                                        art={song.albumArt}
                                        alt={song.alt}
                                    />
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </article>
        </>
    );
};

export default Display;
