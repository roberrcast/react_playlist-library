import React, { Component } from "react";
import { songList } from "../../songInfo";
import Song from "../Song";
import "./Display.scss";

class Display extends Component {
    render() {
        return (
            <>
                <article className="display">
                    <section className="display__showcase">
                        <div className="display__album-art"></div>

                        <div className="display__info">
                            <h3 className="display__title"></h3>

                            <p className="display__band"></p>
                        </div>
                    </section>

                    <section className="display__playlist">
                        <div className="display__grid-item">
                            <h4 className="display__heading">song</h4>

                            <h4 className="display__heading">artist</h4>

                            <h4 className="display__heading">album</h4>

                            <h4 className="display__heading">time</h4>
                        </div>

                        {songList.map((song) => (
                            <div className="display__grid-item" key={song.id}>
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
                    </section>
                </article>
            </>
        );
    }
}

export default Display;
