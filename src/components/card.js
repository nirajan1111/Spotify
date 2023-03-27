import React from "react";
import "./card.css";
export default function Card({ title, description, imgurl }) {
  return (
    <div className="container">
      <img src={imgurl} className="card_img" />
      <div className="play-icon">
        <div className="circle">
          <div className="triangle"></div>
        </div>
      </div>

      <div className="song_name">{title}</div>
      <div className="song_description">{description}</div>
    </div>
  );
}
