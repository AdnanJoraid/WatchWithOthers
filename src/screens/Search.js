
import React, { useState } from "react";
import '../App.css'

function Search({ onSearch }) {
  const [title, setTitle] = useState("");

  const onSubmit = () => {
    console.log(title);

    onSearch(title);
  };

  return (
    <div>
      <div className="form-controls">
        <label>Search</label>
        <input
          onChange={(e) => setTitle(e.target.value)}
          id="video-search"
          type="text"
          placeholder="Type a video name"
        ></input>
        <button onClick={onSubmit}>Search</button>
      </div>
    </div>
  );
}

export default Search;