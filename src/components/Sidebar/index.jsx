import React, { Component } from "react";
import { FaSearch } from "react-icons/fa";
import List from "../List";
import "./Sidebar.scss";

class Sidebar extends Component {
    render() {
        return (
            <>
                <aside className="sidebar">
                    <div className="sidebar__wrapper">
                        <search className="sidebar__search">
                            <form action="" className="sidebar__form">
                                <input
                                    type="search"
                                    id="search"
                                    className="sidebar__input"
                                    placeholder="Búsqueda"
                                />
                                <button className="sidebar__button">
                                    <FaSearch />
                                </button>
                            </form>
                        </search>

                        <section className="sidebar__list">
                            <h2 className="sidebar__title">Playlists</h2>
                            <List name="Playlist 1" />
                        </section>
                    </div>
                </aside>
            </>
        );
    }
}

export default Sidebar;
