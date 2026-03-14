import { screen, render } from "@testing-library/react";
import React from "react";
import Header from "../components/Header";
import Theme from "../theme";
import { ThemeProvider } from "styled-components";
import "@testing-library/jest-dom";

describe("Header component", () => {
    it("should render the Header component", () => {
        render(
            <ThemeProvider theme={Theme}>
                <Header title="Biblioteca" />
            </ThemeProvider>,
        );

        expect(screen.getByText(/biblioteca/i)).toBeInTheDocument();
        expect(screen.getByText(/songs/i)).toBeInTheDocument();
        expect(screen.getByText(/login/i)).toBeInTheDocument();
        expect(screen.getByText(/about/i)).toBeInTheDocument();
    });
});
