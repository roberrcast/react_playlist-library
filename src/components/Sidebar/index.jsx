import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import List from "../List";
import "./Sidebar.scss";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

function Sidebar({ onSearch, onShowLibrary }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
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
                            onSubmit={(event) => event.preventDefault()}
                        >
                            <input
                                type="search"
                                id="search"
                                className="sidebar__input"
                                placeholder="Búsqueda"
                                autoComplete={"off"}
                                onChange={(event) =>
                                    onSearch(event.target.value)
                                }
                            />
                            <button type="button" className="sidebar__button">
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
