import React, { useState } from "react";
import "./Dicegame.css";
import dice from "./dices 1.png";
import first from "./dice_1.png";
import second from "./dice_2.png";
import third from "./dice_3.png";
import four from "./dice_4.png";
import five from "./dice_5.png";
import six from "./dice_6.png";

export default function Dicegame() {
  const [dicenumber, setDicenumber] = useState(0);
  const [val, setVal] = useState(0);
  const [score, setScore] = useState(0);

  const numericHandler = (e) => {
    console.log(e.target.value);
    setVal(e.target.value);
  };

  const RandomNumber = () => {
    if (val === 0) {
      alert("Select any number!");
    } else {
      let a = Math.floor(Math.random() * 6) + 1;
      setDicenumber(a);
      console.log(a);
      if (a == val) {
        let b = score + a;
        setScore(b);
      }
    }
  };

  const ResetHandler = () => {
    setVal(0);
    setDicenumber(0);
    setScore(0);
  };

  return (
    <div>
      <h6 className="top">Select any number </h6>
      <div className="container">
        <h1 className="heading">Score: {score}</h1>
        <div className="buttons">
          <button className="button" value={1} onClick={numericHandler}>
            1
          </button>
          <button className="button" value={2} onClick={numericHandler}>
            2
          </button>
          <button className="button" value={3} onClick={numericHandler}>
            3
          </button>
          <button className="button" value={4} onClick={numericHandler}>
            4
          </button>
          <button className="button" value={5} onClick={numericHandler}>
            5
          </button>
          <button className="button" value={6} onClick={numericHandler}>
            6
          </button>
        </div>
      </div>
      <h6>You selected: {val}</h6>

      <div className="imagecontainer">
        <div className="containerr">
          <div className="image-container">
            {dicenumber === 1 ? (
              <img src={first} alt="Your Image" />
            ) : dicenumber === 2 ? (
              <img src={second} alt="Your Image" />
            ) : dicenumber === 3 ? (
              <img src={third} alt="Your Image" />
            ) : dicenumber === 4 ? (
              <img src={four} alt="Your Image" />
            ) : dicenumber === 5 ? (
              <img src={five} alt="Your Image" />
            ) : dicenumber === 6 ? (
              <img src={six} alt="Your Image" />
            ) : (
              <img
                style={{ height: "250px", width: "250px" }}
                src={dice}
                alt="Your Image"
              />
            )}
            <div style={{ textAlign: "center" }}>
              Number on dice is: {dicenumber}
            </div>
          </div>
          <div className="button-container">
            <button className="button-button" onClick={RandomNumber}>
              Roll Dice
            </button>
            <button className="button-button" onClick={ResetHandler}>
              Reset Score
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
