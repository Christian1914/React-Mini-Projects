import React from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./StarRating";
import ToggleText from "./ShowMore";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <ToggleText />
    <StarRating
      maxRating={5}
      mesagges={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    /> */}
  </React.StrictMode>
);
