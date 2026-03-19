import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import Theme from "../theme";
import { MemoryRouter } from "react-router";
import SearchResults from "../components/SearchResults";
import { configureStore } from "@reduxjs/toolkit";
import useFetchTracks from "../hooks/useFetchTracks";

jest.mock("../assets/addSvg.svg", () => "add-icon");
jest.mock("../assets/deleteSvg.svg", () => "delete-icon");
jest.mock("../assets/tickSvg.svg", () => "tick-icon");
jest.mock("../hooks/useFetchTracks");

describe("SearchResults Component", () => {
    let testStore;

    beforeEach(() => {
        testStore = configureStore({
            reducer: {
                search: (
                    state = { loading: false, error: null, results: [] },
                ) => state,
                library: (state = []) => state,
            },
        });

        useFetchTracks.mockReturnValue({
            tracks: [],
            isLoading: false,
            error: null,
        });
    });

    it("should render the search results: albums", () => {
        testStore = configureStore({
            reducer: {
                search: () => ({
                    results: [
                        {
                            idAlbum: "1",
                            strAlbum: "Nevermind",
                            strArtist: "Nirvana",
                            strAlbumThumb: "https://mock.placeholder.com/123",
                            intYearReleased: "1991",
                        },
                    ],
                }),
                library: () => [],
            },
        });

        render(
            <Provider store={testStore}>
                <ThemeProvider theme={Theme}>
                    <MemoryRouter
                        initialEntries={["/search-results?q=Nirvana"]}
                    >
                        <SearchResults onSongClick={jest.fn()} />
                    </MemoryRouter>
                </ThemeProvider>
            </Provider>,
        );

        const albumCover = screen.getByAltText(
            /imagen de portada de nevermind/i,
        );
        const album = screen.getByText(/nevermind/i);
        const year = screen.getByText(/1991/i);
        const artist = screen.getByText(/nirvana/i);

        expect(albumCover).toBeInTheDocument();
        expect(album).toBeInTheDocument();
        expect(year).toBeInTheDocument();
        expect(artist).toBeInTheDocument();
    });

    it("should render a list of songs once an album is selected", () => {
        testStore = configureStore({
            reducer: {
                search: () => ({
                    results: [
                        {
                            idAlbum: "1",
                        },
                    ],
                }),
                library: () => [],
            },
        });

        const mockSongs = [
            {
                idTrack: "1",
                strTrack: "Smells Like Teen Spirit",
                strArtist: "Nirvana",
                strAlbum: "Nevermind",
                intDuration: 300000,
                alt: "Imagen de portada del álbum Nevermind",
                strAlbumThumb: "https://mock.placeholder.com/123",
            },

            {
                idTrack: "2",
                strTrack: "Come as You Are",
                strArtist: "Nirvana",
                strAlbum: "Nevermind",
                intDuration: 350000,
                alt: "Imagen de portada del álbum Nevermind",
                strAlbumThumb: "https://mock.placeholder.com/456",
            },
        ];

        useFetchTracks.mockReturnValue({
            tracks: mockSongs,
            isLoading: false,
            error: null,
        });

        const mockOnSongClick = jest.fn();

        const dispatchSpy = jest.spyOn(testStore, "dispatch");

        render(
            <Provider store={testStore}>
                <ThemeProvider theme={Theme}>
                    <MemoryRouter
                        initialEntries={["/search-results?q=Nirvana&album=1"]}
                    >
                        <SearchResults onSongClick={mockOnSongClick} />
                    </MemoryRouter>
                </ThemeProvider>
            </Provider>,
        );

        mockSongs.forEach((song) => {
            const expectedAlt = song.strTrackThumb
                ? `Imagen del single ${song.strTrack}`
                : `Imagen de portada del álbum Nevermind`;
            const altElements = screen.getAllByAltText(
                new RegExp(expectedAlt, "i"),
            );
            expect(altElements.length).toBeGreaterThan(0);

            expect(
                screen.getByText(new RegExp(song.strTrack, "i")),
            ).toBeInTheDocument();

            const artists = screen.getAllByText(/nirvana/i);
            expect(artists.length).toBeGreaterThan(0);

            const albums = screen.getAllByText(/nevermind/i);
            expect(albums.length).toBeGreaterThan(0);
        });

        const buttons = screen.getAllByRole("button");
        const addButton = buttons[0];

        fireEvent.click(addButton);

        expect(dispatchSpy).toHaveBeenCalled();
    });
});
