import React from "react";
import chrome from "../../assets/chrome.svg";
import "./index.css";
function Index() {
  return (
    <div className="container">
      <h1 className="maintext">
        <span className="special">for</span>
        <span>
          <img src={chrome} className="App-logo" alt="logo" />{" "}
        </span>
        & Cloud <br />
        gaming
      </h1>
    </div>
  );
}

export default Index;
