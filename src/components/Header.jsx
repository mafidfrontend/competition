import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <header>
      <Navbar />
      <div className="headerContent">
        <div className="container">
          <div className="headerTitleBox">
            <h1 className="headTitle">
              A collaborative Time Tracking that you Need
            </h1>
            <img src="/HeaderShape.svg" alt="Shape" />
          </div>
          <p className="headerDescription">
            An enim nullam tempor sapien gravida donec enim ipsum porta justo
            congue magna at pretium purus pretium ligula
          </p>
          <button>Start 14 Days Trial</button>
          <div className="position">
            <img className="mainSvg" src="/alarm.svg" alt="Shape" />
            <img src="/alarmShape.svg" alt="Shape" />
            <img src="/HeaderStar.svg" alt="Shape" />
            <img src="/oclock.svg" alt="Shape" />
            <img className="mainSvg" src="/clipboard.png" alt="Shape" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
