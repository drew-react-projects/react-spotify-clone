import React from "react";
import "./SongRow.css";

function SongRow(props) {
  return (
    <div className="songRow">
      <img className="songRow__album" src={props.track.album.images[0].url} alt="album in rows" />
      <div className="songRow__info">
        <h1>{props.track.name}</h1>
        <p>
          {props.track.artists.map((artist) => artist.name).join(", ")}
          {props.track.album.name}
        </p>
      </div>
    </div>
  );
}

export default SongRow;
