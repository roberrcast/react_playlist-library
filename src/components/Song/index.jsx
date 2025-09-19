import React, { Component } from "react";
import "./Song.scss";

class Song extends Component {
    render() {
        return (
            <>
                <div className="display__grid-art">
                    <img
                        src={this.props.art}
                        alt={this.props.alt}
                        className="display__grid-img"
                    />
                </div>

                <p className="display__grid-title">{this.props.title}</p>

                <p className="display__grid-artist">{this.props.artist}</p>

                <p className="display__grid-album">{this.props.album}</p>

                <p className="display__grid-time">{this.props.time}</p>
            </>
        );
    }
}

export default Song;
