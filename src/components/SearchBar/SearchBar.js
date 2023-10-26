import React, {useState, useCallback} from "react";
import "./SearchBar.css";



function SearchBar(props) {
    const [term, setTerm] = useState("");
    const handleTermChange = useCallback ((event) => {
    setTerm(event.target.value);
    }, []);

    const search = useCallback (() => {
        props.onSearch(term);
    }, [props.onsearch, term])

    return (
        <div className="SearchBar">
            <input placeholder="Enter a song title" onChange={handleTermChange}/>
            <button className="SearchButton" onClick={search}>
                SEARCH
            </button>
        </div>
    );
};

export default SearchBar;