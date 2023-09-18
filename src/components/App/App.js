import React, {useState} from "react"
import './App.css';
import SearchResults from "../SearchResults/SearchResults";
import SearchBar from "../SearchBar/SearchBar";
import Playlist from "../Playlist/playlist";
function App() {
  const [searchResults, setSearchResults] = useState([{name:"nights", artist:"Frank Ocean", album:"Blonde", id:"nights"},
  {name:"ivy", artist:"Frank Ocean", album:"Blonde", id:"nights1"},
  {name:"nights", artist:"Frank Ocean", album:"Blonde", id:"nights2"},
  {name:"nights", artist:"Frank Ocean", album:"Blonde", id:"nights3"}]);
  
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
          <SearchResults searchResults={searchResults}/>
          <Playlist/>
          </div>
    
        </div>
      </div>
     
  );
};

export default App;
