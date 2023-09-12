import React, {useState} from "react"
import './App.css';
import SearchResults from "../SearchResults/SearchResults";
import SearchBar from "../SearchBar/SearchBar";
import Playlist from "../Playlist/playlist";
function App() {
  const [searchResults, setSearchResults] = useState([])
  return (
      <>
      <div>
        <div>
          <h1>Galactic Playlist</h1>
        </div>
        <div className='App'>
          <div>
            <SearchBar/>
          </div>
          <div className='Playlist'>
          <SearchResults/>
          <Playlist/>
          </div>
    
        </div>
      </div>
     </>
  );
}

export default App;
