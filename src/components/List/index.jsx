import React, { Fragment } from "react";

function List({ name }) {
    return (
        <Fragment>
            <div className="sidebar__playlist">
                <p className="sidebar__playlist-name">{name}</p>
            </div>
        </Fragment>
    );
}

export default List;
