import React, { useCallback } from "react";
import TrackList from "../TrackList/TrackList";
import "./Playlist.css";

function PlayList(props) {
    const handleNameChange = useCallback ((event) => {
    props.onNameChange(event.target.value)
     }, [props.onNameChange] 
     
     );

    
return (
    <div className="PlayList">
        <input onChange={handleNameChange}defaultValue={props.playlistName}/>
        <TrackList 
        tracks={props.playlistTracks}
        isRemoval={true}
        onRemove={props.onRemove}/>
        <button className="PlayList-save" onClick={props.onSave}>
        Save to PlayList
        </button>
        
    </div>
)
};


export default PlayList;