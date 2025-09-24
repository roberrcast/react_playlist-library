import React, { Component } from "react";
import { FaSearch } from "react-icons/fa";
import List from "../List";
import "./Sidebar.scss";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }

    toggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };

    render() {
        const sidebarClassName = `sidebar ${this.state.isOpen ? "sidebar--is-open" : ""}`;

        return (
            <>
                <aside className={sidebarClassName}>
                    <button
                        className="sidebar__btn-toggle"
                        onClick={this.toggle}
                    >
                        <FaBars />
                    </button>
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

                                <button className="sidebar__close-btn">
                                    <FaTimes />
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
