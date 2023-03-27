import React from "react";
import Card from "./card";
import "./cards.css";
export default function Cards() {
  return (
    <div className="container_cards">
      <div className="cards" id="card1">
        <Card
          id="card1"
          className="cards"
          title="Peaceful piano"
          description=" Relax and indulge with beautiful piano pieces"
          imgurl="https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg"
        />
      </div>
      <div className="cards" id="card2">
        <Card
          id="card1"
          className="cards"
          title="Peaceful piano"
          description=" Relax and indulge with beautiful piano pieces"
          imgurl="https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg"
        />
      </div>
      <div className="cards" id="card3">
        <Card
          id="card1"
          className="cards"
          title="Peaceful piano"
          description=" Relax and indulge with beautiful piano pieces"
          imgurl="https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg"
        />
      </div>
      <div className="cards" id="card4">
        <Card
          id="card1"
          className="cards"
          title="Peaceful piano"
          description=" Relax and indulge with beautiful piano pieces"
          imgurl="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80"
        />
      </div>
    </div>
  );
}
