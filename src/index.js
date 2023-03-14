import React from "react";
import ReactDOM from "react-dom";

const fname = "Suryaveer";
const lname = "Kadyan";
const luckyNum = 21;

ReactDOM.render(
  <div>
    <h1>I am {fname + " " + lname}!</h1>
    <p>My lucky number is {luckyNum + 7}. </p>
  </div>,
  document.getElementById("root")
);
