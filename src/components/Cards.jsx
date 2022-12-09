import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import madara from "../image/madara.jpg";
import saske from "../image/saske.jpg";
import klinok from "../image/klinok.png";
import satoru from "../image/satoru.jpg";
import grihi from "../image/grihi.jpg";
import titans from "../image/titans.png";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Anime!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={madara}
              text="Explore the world of infinite Tsukuyomi"
              lable="Naruto"
              path="/watch"
            />
            <CardItem
              src={saske}
              text="Feel the world of pain and suffering"
              lable="Naruto"
              path="/watch"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={klinok}
              text="Explore the world of demons"
              lable="Demon Slayer"
              path="/Anime"
            />
            <CardItem
              src={satoru}
              text="Live a life with a demon inside"
              lable="Jutsu Kaisen"
              path="/anime"
            />
            <CardItem
              src={grihi}
              text="Become a demon"
              lable="7 deadly sins"
              path="/watch"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={titans}
              text="Explore the world where the Titans live"
              lable="Attack on Titan"
              path="/anime"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
