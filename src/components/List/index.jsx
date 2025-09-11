import React, { Component } from "react";
import "./List.scss";

class List extends Component {
    render() {
        return (
            <>
                <div className="sidebar__playlist">
                    <p className="sidebar__playlist-name">{this.props.name}</p>
                </div>
            </>
        );
    }
}

export default List;
