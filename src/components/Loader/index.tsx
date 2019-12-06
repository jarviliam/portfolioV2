import React, { useEffect } from "react";
import "../../../node_modules/animate.css/animate.css";
import { ReactComponent as LiamSVG } from "../../assets/LiamJarvis.svg";
import "./animations.scss";
const Loader = () => {
  useEffect(() => {
    console.log("use");
    window.scrollTo(0, 0);
  });
  //Use Effect for one-time run. Gets the element and adds a display of none after a 5sec delay to match animations
  useEffect(() => {
    const element = document.getElementById("loader");
    setTimeout(() => {
      element!.classList.add("d-none");
    }, 5000);
  }, []);

  return (
    <div className="loader animated fadeOut" id="loader">
      <LiamSVG className="animated fadeOut delay-3s" height="100px" />
    </div>
  );
};

export default Loader;
