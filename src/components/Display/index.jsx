import React, { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import SearchResults from "../SearchResults";
import SongDetails from "../SongDetails";
import Breadcrumb from "../Breadcrumb";
import Library from "../Library";
import * as Styled from "./styles";

const Display = ({ viewType = "search" }) => {
    const [defaultSong, setSong] = useState(null);
    const { trackId: paramTrackId } = useParams();
    const [searchParams] = useSearchParams();

    const trackId = paramTrackId || searchParams.get("trackId");
    const trackName = searchParams.get("track");
    const albumName = searchParams.get("albumName");
    const albumArt = searchParams.get("albumArt");

    const handleSongClick = (song) => {
        setSong(song);
    };

    return (
        <>
            <Styled.DisplayWrapper>
                <Styled.DisplayInner>
                    <Styled.Showcase>
                        {defaultSong ? (
                            <>
                                <Styled.AlbumArt>
                                    <Styled.AlbumImg
                                        src={defaultSong.albumArt}
                                        alt={defaultSong.alt}
                                        className="display__album-img"
                                    />
                                </Styled.AlbumArt>

                                <Styled.Info>
                                    <Styled.InfoTitle>
                                        {defaultSong.title}
                                    </Styled.InfoTitle>
                                    <Styled.InfoBand>
                                        {defaultSong.artist}
                                    </Styled.InfoBand>
                                </Styled.Info>
                            </>
                        ) : (
                            <Styled.PlaceHolder>
                                <Styled.ShowcaseMessage>
                                    Seleccione un álbum o canción
                                </Styled.ShowcaseMessage>
                            </Styled.PlaceHolder>
                        )}
                    </Styled.Showcase>

                    <Styled.Breadcrumb>
                        <Breadcrumb />
                    </Styled.Breadcrumb>

                    <Styled.Playlist>
                        {trackId ? (
                            <SongDetails
                                trackId={trackId}
                                songName={trackName}
                                albumName={albumName}
                                albumArt={albumArt}
                            />
                        ) : viewType === "library" ? (
                            <Library onSongClick={handleSongClick} />
                        ) : (
                            <SearchResults onSongClick={handleSongClick} />
                        )}
                    </Styled.Playlist>
                </Styled.DisplayInner>
            </Styled.DisplayWrapper>
        </>
    );
};

export default Display;
