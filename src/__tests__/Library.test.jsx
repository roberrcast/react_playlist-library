import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import Theme from "../theme";
import Library from "../components/Library";
import { addSong, removeSong } from "../redux/slices/librarySlice";
import { configureStore } from "@reduxjs/toolkit";

jest.mock("../assets/addSvg.svg", () => "add-icon");
jest.mock("../assets/deleteSvg.svg", () => "delete-icon");
jest.mock("../assets/tickSvg.svg", () => "tick-icon");

describe("Library Component", () => {
    it("should show a empty message when there are no songs", () => {
        const testStore = configureStore({
            reducer: {
                library: () => [],
            },
        });

        render(
            <Provider store={testStore}>
                <ThemeProvider theme={Theme}>
                    <Library />
                </ThemeProvider>
            </Provider>,
        );

        expect(screen.getByText(/su librería está vacía/i)).toBeInTheDocument();
    });

    it("should render a list of songs in library and test delete functionality", () => {
        const mockSongs = [
            {
                id: "1",
                title: "Smells Like Teen Spirit",
                artist: "Nirvana",
                album: "Nevermind",
                length: 300000,
                alt: "Imagen de portada del álbum Nevermind",
                albumArt: "https://mock.placeholder.com/123",
            },

            {
                id: "2",
                title: "Come as You Are",
                artist: "Nirvana",
                album: "Nevermind",
                length: 350000,
                alt: "Imagen de portada del álbum Nevermind",
                albumArt: "https://mock.placeholder.com/456",
            },
        ];

        const testStore = configureStore({
            reducer: {
                library: () => mockSongs,
            },
        });

        const dispatchSpy = jest.spyOn(testStore, "dispatch");

        render(
            <Provider store={testStore}>
                <ThemeProvider theme={Theme}>
                    <Library />
                </ThemeProvider>
            </Provider>,
        );

        mockSongs.forEach((song) => {
            expect(
                screen.getByText(new RegExp(song.title, "i")),
            ).toBeInTheDocument();

            const artistElements = screen.getAllByText(
                new RegExp(song.artist, "i"),
            );
            expect(artistElements.length).toBeGreaterThan(0);

            const delBtn = screen.getByRole("button", {
                name: new RegExp(
                    `eliminar ${song.title} de la biblioteca`,
                    "i",
                ),
            });

            fireEvent.click(delBtn);

            expect(dispatchSpy).toHaveBeenCalledWith(removeSong(song.id));
        });
    });
});
