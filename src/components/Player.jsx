import { useState } from "react";
export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEdit() {
    //Instead of updating directly, update the state using callback function as react schedules the job
    setIsEditing((editing) => !editing);
  }

  function handleChange(event) {
    setPlayerName(event.target?.value);
  }

  return (
    <li>
      <span className="player">
        {isEditing ? (
          <input
            className="player-name"
            required
            value={playerName}
            onChange={handleChange}
          ></input>
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
