
import React, { useState } from "react";

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
          placeholder="enter search keyword"
        ></input>
        <button onClick={onSubmit}>Search</button>
      </div>
    </div>
  );
}

export default Search;