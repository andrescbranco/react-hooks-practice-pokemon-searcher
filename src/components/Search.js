import React, { useState } from "react";

function Search({handleSearch, searchTerm}) {

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={handleSearch} className="prompt" value={searchTerm}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
