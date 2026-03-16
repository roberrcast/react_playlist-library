import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "../components/SearchBar";
import Theme from "../theme";
import { ThemeProvider } from "styled-components";
import "@testing-library/jest-dom";
import store from "../redux/store";
import { Provider } from "react-redux";

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

describe("SearchBar component", () => {
    it("should search the user's query", () => {
        const mockSearch = jest.fn();
        render(
            <Provider store={store}>
                {" "}
                <ThemeProvider theme={Theme}>
                    {" "}
                    <SearchBar onSearch={mockSearch} />{" "}
                </ThemeProvider>{" "}
            </Provider>,
        );
        const input = screen.getByPlaceholderText(
            /busca álbumes por artista.../i,
        );
        const button = screen.getByRole("button");
        fireEvent.change(input, { target: { value: "Nirvana" } });
        fireEvent.click(button);
        expect(mockSearch).toHaveBeenCalledWith("Nirvana");
    });
});
