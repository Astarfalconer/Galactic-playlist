import React, { useState, useCallback} from "react"
import './App.css';
import SearchResults from "../SearchResults/SearchResults";
import SearchBar from "../SearchBar/SearchBar";
import Playlist from "../Playlist/playlist";
function App() {
  const [searchResults, setSearchResults] = useState([{name:"nights", artist:"Frank Ocean", album:"Blonde", id:"nights"},
  {name:"ivy", artist:"Frank Ocean", album:"Blonde", id:"nights1"},
  {name:"nights", artist:"Frank Ocean", album:"Blonde", id:"nights2"},
  {name:"nights", artist:"Frank Ocean", album:"Blonde", id:"nights3"}]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);
  
  const addTrack = useCallback (
    (track) => {
      if(playlistTracks.some((savedTrack) => savedTrack.id === track.id))
      return;
    setPlaylistTracks((prevTracks) => [...prevTracks, track]);
    },
    [playlistTracks]
  );

  const removeTrack = useCallback (
    (track) => {
      setPlaylistTracks((prevTracks) => 
      prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
      );
    }, []);

    const updatePlaylistName = useCallback ((name) => {
      setPlaylistName(name);
},[]);
const savePlaylist = (playlistTracks) => {
    playlistTracks.map(track => track.uri);
};
  return (
      
      <div>
        <div>
          <h1>Galactic Playlist</h1>
        </div>
        <div className='App'>
          <div>
            <SearchBar/>
          </div>
          <div className='App-Playlist'>
          <SearchResults searchResults={searchResults} onAdd={addTrack}/>
          <Playlist 
          playlistName={playlistName}
          playlistTracks={playlistTracks}
          onRemove={removeTrack}
          onNameChange={updatePlaylistName}
          onSave={savePlaylist}
          />
          </div>
    
        </div>
      </div>
     
  );
};

export default App;
