import React from "react";

import { ReactComponent as DocumentSVG } from "../../assets/document.svg";
import { ProjectArray } from "../../utilities/projectlist";

import "./works-style.scss";
const Works = React.forwardRef((props: any, ref: any) => {
  return (
    <section ref={ref} className="works-section">
      <div className="works-header">
        <h2>Works</h2>
        <div className="below">
          <div className="rect" />
          <div className="box" />
        </div>
      </div>
      <div className="works-container">
        {ProjectArray.map((project, key) => (
          <div key={key} className="work">
            <div className="heading">
              <h2>{project.title}</h2>
              <p>{project.description.split(".")[0] + "."}</p>
            </div>
            <div className="tech">{project.renderHighlights()}</div>
            <div className="bottom">
              <div className="red-button">
                <span>Read More</span>
              </div>
              <div className="code-button">
                <DocumentSVG className="document" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

export default Works;
