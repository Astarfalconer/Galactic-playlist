import React, { useState, useCallback} from "react"
import './App.css';
import SearchResults from "../SearchResults/SearchResults";
import SearchBar from "../SearchBar/SearchBar";
import Playlist from "../Playlist/playlist";
import Spotify from "../../util/Spotify";
function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const search = useCallback ((term) => {
    Spotify.search(term).then(setSearchResults)
  }, []);
  
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
const savePlaylist = useCallback (() => {
  const trackUris =  playlistTracks.map((track) => track.uri);
  Spotify.savePlaylist(playlistName, trackUris).then(() => {
    setPlaylistName("New Playlist");
    setPlaylistTracks([]);
  })
}, [playlistName, playlistTracks]);
  return (
      
      <div>
        <div>
          <h1>Galactic Playlist</h1>
        </div>
        <div className='App'>
          <div>
            <SearchBar onSearch={search}/>
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
