/*import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);*/
//var React = require("react");
//var ReactDom = require("react-dom");
import React from "react";
import ReactDom from "react-dom";
import LoaderUtils from "loader-utils";
//import ReactScripts from "react-scripts";
/*var fname = "bhavana";
var lname = "chan";
var id = 511;*/
var wanttoedit = false;
var imgurl = "https://picsum.photos/200/300";
const state = {
  color: "red",
  backgroundColor: "pink"
};

ReactDom.render(
  <div>
    <h1 style={state} contentEditable={wanttoedit}>
      My favorite foods
    </h1>
    <img src={imgurl} alr="no img found" />
    <ul>
      <li>kfc</li>
      <li>pastry</li>
      <li>biriyani</li>
    </ul>
  </div>,
  document.getElementById("root")
);
/*ReactDom.render(
  <div>
    <h1>hlo my name is {fname + " " + lname}</h1>
    <h2>my id was {id}</h2>
  </div>,
  document.getElementById("root")
);*/
