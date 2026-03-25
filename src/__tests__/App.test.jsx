import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import Theme from "../theme";
import { MemoryRouter } from "react-router";
import App from "../App";
import store from "../redux/store";
import useFetchTracks from "../hooks/useFetchTracks";
import useFetchSongDetails from "../hooks/useFetchSongDetails";

jest.mock("../hooks/useFetchTracks.js");
jest.mock("../hooks/useFetchSongDetails.js");

jest.mock("../assets/addSvg.svg");
jest.mock("../assets/deleteSvg.svg");
jest.mock("../assets/tickSvg.svg");

// --- funciones para silenciar el error por el elemento <search> en SearchBar/styles.js ---

beforeAll(() => {
    const originalError = console.error;
    jest.spyOn(console, "error").mockImplementation((...args) => {
        if (typeof args[0] === "string" && args[0].includes("unrecognized"))
            return;
        originalError(...args);
    });
});

afterAll(() => {
    console.error.mockRestore();
});

describe("App Component", () => {
    beforeEach(() => {
        useFetchTracks.mockReturnValue({
            tracks: [],
            isLoading: false,
            error: null,
        });
        useFetchSongDetails.mockReturnValue({
            details: [],
            isLoading: false,
            error: null,
        });
    });

    it("should render the App component", () => {
        render(
            <Provider store={store}>
                <ThemeProvider theme={Theme}>
                    <MemoryRouter>
                        <App />
                    </MemoryRouter>
                </ThemeProvider>
            </Provider>,
        );

        expect(screen.getByText(/biblioteca/i)).toBeInTheDocument();
        expect(
            screen.getByPlaceholderText(/busca álbumes por artista.../i),
        ).toBeInTheDocument();
    });

    it("should navigate from Home to search results when a search is performed", async () => {
        render(
            <Provider store={store}>
                <ThemeProvider theme={Theme}>
                    <MemoryRouter initialEntries={["/"]}>
                        <App />
                    </MemoryRouter>
                </ThemeProvider>
            </Provider>,
        );

        const input = screen.getByPlaceholderText(
            /busca álbumes por artista.../i,
        );
        const searchBtn = screen.getByRole("button");

        fireEvent.change(input, { target: { value: "Nirvana" } });
        fireEvent.click(searchBtn);

        expect(await screen.findByText(/playlist 1/i)).toBeInTheDocument();
    });

    it("should handle side bar actions: search, clear, and library navigation", async () => {
        render(
            <Provider store={store}>
                <ThemeProvider theme={Theme}>
                    <MemoryRouter
                        initialEntries={["/search-results?q=Nirvana"]}
                    >
                        <App />
                    </MemoryRouter>
                </ThemeProvider>
            </Provider>,
        );

        const sidebarInput = screen.getByPlaceholderText(/búsqueda/i);
        fireEvent.change(sidebarInput, { target: { value: "Oasis" } });

        const searchBtn = screen.getAllByRole("button")[0];
        fireEvent.click(searchBtn);

        const clearBtn = screen.getAllByRole("button")[1];
        if (clearBtn) {
            fireEvent.click(clearBtn);
            expect(sidebarInput.value).toBe("");
        }
    });

    it("should navigate using the breadcrumb links and show hover effect on an album", async () => {
        store.dispatch({
            type: "search/fetchSongs/fulfilled",
            payload: [
                {
                    idAlbum: "123",
                    strAlbum: "Nevermind",
                    strArtist: "Nirvana",
                    strAlbumThumb: "https://mock.placeholder.com/123",
                },
            ],
        });

        render(
            <Provider store={store}>
                <ThemeProvider theme={Theme}>
                    <MemoryRouter
                        initialEntries={[
                            "/track/1?q=Nirvana&album=123&albumName=Nevermind&track=Smells%20Like%20Teen%20Spirit",
                        ]}
                    >
                        <App />
                    </MemoryRouter>
                </ThemeProvider>
            </Provider>,
        );

        const albumLink = screen.getByText("Nevermind", { selector: "span" });
        fireEvent.click(albumLink);

        expect(screen.getByText(/album/i)).toBeInTheDocument();

        const artistLink = screen.getByText("Nirvana", { selector: "span" });
        fireEvent.click(artistLink);

        expect(screen.queryByText(/album/i)).not.toBeInTheDocument();

        const album = screen.getByText(/nevermind/i);
        expect(album).toBeInTheDocument();

        fireEvent.mouseEnter(album);
        fireEvent.mouseLeave(album);
    });

    it("should go from searching an artist to showing album tracks, song details, adding/deleting in library, and checking the library", async () => {
        store.dispatch({
            type: "search/fetchSongs/fulfilled",
            payload: [
                {
                    idAlbum: 123,
                    strAlbum: "Nevermind",
                    strArtist: "Nirvana",
                    strAlbumThumb: "https://mock.api.com/456",
                },
            ],
        });

        useFetchTracks.mockReturnValue({
            tracks: [
                {
                    idTrack: "1",
                    strTrack: "Smells Like Teen Spirit",
                    strArtist: "Nirvana",
                    strAlbum: "Nevermind",
                },
            ],
            isLoading: false,
            error: null,
        });

        render(
            <Provider store={store}>
                <ThemeProvider theme={Theme}>
                    <MemoryRouter
                        initialEntries={["/search-results?q=Nirvana"]}
                    >
                        <App />
                    </MemoryRouter>
                </ThemeProvider>
            </Provider>,
        );

        // --- Vista de los álbumes y se selecciona uno "Nevermind" ---

        const album = screen.getByText(/nevermind/i);
        expect(album).toBeInTheDocument();

        fireEvent.click(album);

        // --- Se renderiza una lista de canciones perteneciente a un álbum ---

        const song = await screen.findByText(/smells like teen spirit/i);
        expect(song).toBeInTheDocument();

        // --- Se selecciona una canción para ver sus detalles como descripción, etc. ---

        useFetchSongDetails.mockReturnValue({
            details: [
                {
                    idTrack: "1",
                    strDescriptionEN:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                },
            ],
            isLoading: false,
            error: null,
        });

        /* Encontramos el botón para agregar y lo clickamos para agregar a la biblioteca
         * antes de clickar la canción para mostrar sus detalles */

        const addBtn = screen.getByLabelText(
            /agregar smells like teen spirit a la biblioteca/i,
        );

        fireEvent.click(addBtn);

        /* Revisamos que la canción muestre que ha sido agregada a
         * la biblioteca con el aria-label */

        const wasAdded = screen.getByLabelText(
            /smells like teen spirit ha sido agregada a su biblioteca/i,
        );
        expect(wasAdded).toBeInTheDocument();

        // --- Clickamos la canción para mostrar sus detalles ---

        fireEvent.click(song);

        expect(
            screen.getByText(
                /lorem ipsum dolor sit amet, consectetur adipiscing elit./i,
            ),
        ).toBeInTheDocument();

        /* --- Clickamos 'playlist 1' en el sidebar para mostrar la librería --- */

        fireEvent.click(screen.getByText(/playlist 1/i));

        const librarySongs = screen.getAllByText(/smells like teen spirit/i);
        expect(librarySongs.length).toBeGreaterThan(0);

        /* --- Eliminamos la canción de la librería --- */

        const delBtn = screen.getByLabelText(
            /eliminar smells like teen spirit de la biblioteca/i,
        );

        fireEvent.click(delBtn);

        /* --- Mostramos la librería vacía --- */

        expect(screen.getByText(/su librería está vacía/i)).toBeInTheDocument();
    });

    it("should show the song is already in the library if it was added before", async () => {
        store.dispatch({
            type: "library/addSong",
            payload: {
                id: "1",
                title: "Smells Like Teen Spirit",
                artist: "Nirvana",
            },
        });

        useFetchTracks.mockReturnValue({
            tracks: [
                {
                    idTrack: "1",
                    strTrack: "Smells Like Teen Spirit",
                    strArtist: "Nirvana",
                    strAlbum: "Nevermind",
                },
            ],
            isLoading: false,
            error: null,
        });

        render(
            <Provider store={store}>
                <ThemeProvider theme={Theme}>
                    <MemoryRouter
                        initialEntries={["/search-results?q=Nirvana&album=123"]}
                    >
                        <App />
                    </MemoryRouter>
                </ThemeProvider>
            </Provider>,
        );

        expect(
            screen.getByLabelText(
                /smells like teen spirit se encuentra en su biblioteca/i,
            ),
        ).toBeInTheDocument();
    });
});
