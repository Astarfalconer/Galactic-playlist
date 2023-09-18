import React from "react";
import TrackList from "../TrackList/TrackList";
import "./Playlist.css";

function PlayList() {
return (
    <div className="PlayList">
        <input/>
        <TrackList/>
        <button className="PlayList-save">
        Save to PlayList
        </button>
        
    </div>
)
};


export default PlayList;