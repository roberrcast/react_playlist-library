import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import List from "../List";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import * as Styled from "./styles";

function Sidebar({ onSearch, onShowLibrary, searchQuery }) {
    const [isOpen, setIsOpen] = useState(false);

    //Función para hacer toggle al sidebar en mobile
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    //Estado para el input value del search bar
    const [inputValue, setInputValue] = useState(searchQuery);

    //Función para el cambio de estado del input value
    useEffect(() => {
        setInputValue(searchQuery);
    }, [searchQuery]);

    //Función para evitar el default en form
    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim()) {
            onSearch(inputValue);
        }
    };

    //const sidebarClassName = `sidebar ${isOpen ? "sidebar--is-open" : ""}`;

    return (
        <>
            <Styled.SidebarContainer isOpen={isOpen}>
                <Styled.ToggleButton onClick={toggle}>
                    <FaBars />
                </Styled.ToggleButton>
                <Styled.SidebarWrapper>
                    <Styled.Search>
                        <Styled.SearchForm
                            action=""
                            onSubmit={handleFormSubmit}
                        >
                            <Styled.SearchInput
                                type="search"
                                id="search"
                                placeholder="Búsqueda"
                                autoComplete={"off"}
                                value={inputValue}
                                onChange={(event) =>
                                    setInputValue(event.target.value)
                                }
                            />
                            <Styled.SearchButton type="submit">
                                <FaSearch />
                            </Styled.SearchButton>

                            <Styled.CloseButton type="button" onClick={toggle}>
                                <FaTimes />
                            </Styled.CloseButton>
                        </Styled.SearchForm>
                    </Styled.Search>

                    <Styled.ListSection>
                        <Styled.Title>Playlists</Styled.Title>
                        <Styled.PlaylistItem onClick={onShowLibrary}>
                            <List name="Playlist 1" />
                        </Styled.PlaylistItem>
                    </Styled.ListSection>
                </Styled.SidebarWrapper>
            </Styled.SidebarContainer>
        </>
    );
}

export default Sidebar;
