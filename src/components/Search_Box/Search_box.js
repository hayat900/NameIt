import React from 'react';
import './Search_box.css';
const SearchBox = ({ onInputChange }) => {
    return (
        <div className="search_container">
            <input placeholder="Type keywords" className="search_input" onChange={(event) => {
                onInputChange(event.target.value);
                console.log(event.target.value)
            }}></input>
        </div>
    )
}
export default SearchBox;
