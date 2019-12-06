import React from "react";
import { ReactComponent as ComputerSVG } from "../../assets/Computer.svg";

const Hero = React.forwardRef((props: any, ref: any) => {
  return (
    <section ref={ref} className="hero-section">
      <div className="hero-main-container">
        <div className="hero-left">
          <div className="hero-action">
            <div className="hero-rect" />
            <h1>
              All-In-One <br />
              Application <br />
              Development.
            </h1>
          </div>
          <div className="hero-desc">
            <h2>
              Hey There! <br /> I'm a full-stack developer <br />
              located in Tokyo.
            </h2>
          </div>
          <div className="hero-buttons">
            <div className="button-big">
              <span>To GitHub</span>
            </div>
            <div className="button-small">
              <span>my works</span>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <ComputerSVG id="computer" />
        </div>
      </div>
      <div className="hero-divider" />
    </section>
  );
});

export default Hero;
