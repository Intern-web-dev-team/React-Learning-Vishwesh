import React from "react";
import { useState } from "react";

function Player({ name, symbol }) {
  const [Name, setName]= useState(name);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing(editing => !editing);
  }
  function handleChange(event){
    console.log(event.target.value);
    setName(event.target.value);
  }

  return (
    <li>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{Name}</span>
        ) : (
          <input type="text" required  value={Name} onChange={handleChange}/>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick} >{!isEditing ? "Edit" : "Save"}</button>
    </li>
  );
}

export default Player;
