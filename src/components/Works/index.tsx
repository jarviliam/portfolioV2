import React from "react";
import Visibility from "../Visibility/index";

import { ReactComponent as DocumentSVG } from "../../assets/document.svg";
import { ProjectArray } from "../../utilities/projectlist";

const Works = React.forwardRef((props: any, ref: any) => {
  return (
    <section ref={ref} className="works-section">
      <Visibility parentRef={ref}>
        <div className="works-header">
          <h2>Works</h2>
          <div className="below">
            <div className="rect" />
            <div className="box" />
          </div>
        </div>
        {/* <div className="works-container">
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
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href={project.url}
                  >
                    <DocumentSVG className="document" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div> */}
        <div className="works-containerZ">
          <div className="works-left"></div>
          <div className="works-right">
            {ProjectArray.map((project, key) => (
              <div key={key} className="project">
                <div className="header">
                  <h2>{project.title}</h2>
                  {project.renderType()}
                </div>
                <div className="main">{project.renderHighlights()}</div>
                <div className="right">
                  <div className="red-button">
                    <span>Read More</span>
                  </div>
                  <div className="code-button">
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href={project.url}
                    >
                      <DocumentSVG className="document" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Visibility>
    </section>
  );
});

export default Works;
