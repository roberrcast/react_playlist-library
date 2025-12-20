import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import List from "../List";
import "./Sidebar.scss";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
/* import { formatSearchQuery } from "../../utilsJS/utils.js"; */

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

    const sidebarClassName = `sidebar ${isOpen ? "sidebar--is-open" : ""}`;

    return (
        <>
            <aside className={sidebarClassName}>
                <button className="sidebar__btn-toggle" onClick={toggle}>
                    <FaBars />
                </button>
                <div className="sidebar__wrapper">
                    <search className="sidebar__search">
                        <form
                            action=""
                            className="sidebar__form"
                            onSubmit={handleFormSubmit}
                        >
                            <input
                                type="search"
                                id="search"
                                className="sidebar__input"
                                placeholder="Búsqueda"
                                autoComplete={"off"}
                                value={inputValue}
                                onChange={(event) =>
                                    setInputValue(event.target.value)
                                }
                            />
                            <button type="submit" className="sidebar__button">
                                <FaSearch />
                            </button>

                            <button
                                type="button"
                                className="sidebar__close-btn"
                                onClick={toggle}
                            >
                                <FaTimes />
                            </button>
                        </form>
                    </search>

                    <section className="sidebar__list">
                        <h2 className="sidebar__title">Playlists</h2>
                        <div onClick={onShowLibrary}>
                            <List name="Playlist 1" />
                        </div>
                    </section>
                </div>
            </aside>
        </>
    );
}

export default Sidebar;
