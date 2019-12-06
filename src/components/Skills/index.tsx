import React from "react";
import { ReactComponent as JavaScriptSVG } from "../../assets/frontend/html5-original.svg";
import { ReactComponent as HTMLSVG } from "../../assets/frontend/javascript-original.svg";
import { ReactComponent as ReactSVG } from "../../assets/frontend/react-original.svg";
import { ReactComponent as ReduxSVG } from "../../assets/frontend/redux-original.svg";
import { ReactComponent as TypeScriptSVG } from "../../assets/frontend/typescript-original.svg";

import { ReactComponent as ExpressSVG } from "../../assets/backend/express-original.svg";
import { ReactComponent as FirebaseSVG } from "../../assets/backend/firebase.svg";
import { ReactComponent as GraphQLSVG } from "../../assets/backend/graphql-icon.svg";
import { ReactComponent as MongoDBSVG } from "../../assets/backend/mongodb-original-wordmark.svg";
import { ReactComponent as MYSQLSVG } from "../../assets/backend/mysql-original.svg";
import { ReactComponent as NodeJsSVG } from "../../assets/backend/nodejs-original.svg";

import { ReactComponent as CSSSVG } from "../../assets/design/css-logo.svg";
import { ReactComponent as IllustratorSVG } from "../../assets/design/illustrator-plain.svg";
import { ReactComponent as PhotoshopSVG } from "../../assets/design/photoshop-line.svg";
import { ReactComponent as SASSSVG } from "../../assets/design/sass-original.svg";
import { ReactComponent as XDSVG } from "../../assets/design/xd.svg";

import "./skills-styling.scss";

const Skills = React.forwardRef((props: any, ref: any) => {
  return (
    <section ref={ref} className="skills-section">
      <div className="skills-header">
        <h2>Tech Stack</h2>
        <div className="below">
          <div className="rect" />
          <div className="box" />
        </div>
      </div>
      <div className="skills-category">
        <div className="left-side logos">
          <div className="top">
            <HTMLSVG className="svg" />
            <ReactSVG className="svg" />
            <JavaScriptSVG className="svg" />
          </div>
          <div className="bottom">
            <ReduxSVG className="svg" />
            <TypeScriptSVG className="svg" />
          </div>
        </div>
        <div className="right-side">
          <h3>Front-End Development</h3>
          <p>
            My main Front-End Tech-stack for projects primarily consists of
            technologies based around Javascript, more specifically the
            Javascript Framework, <b>ReactJS</b>. Alongside ReactJS, I
            frequently use <b>Typescript</b> for features such as Static Typing
            and for more Object-Oriented Code. However, I am also familiar with
            <b> Laravel</b> and <b>Python</b> programming as well.
          </p>
        </div>
      </div>
      <div className="skills-category">
        <div className="left-side">
          <h3>Back-End Development</h3>
          <p>
            Similarily to the Front-End, My main server-side framework of choice
            is <b>Express</b>. I am comfortable with creating REST APIs as well
            as using <b>GraphQL</b> for requests. As for the database, I am
            familiar with both relational and non-relational databases such as{" "}
            <b>MongoDB</b> and <b>MySQL</b>. I have also used cloud-systems such
            as <b>Firebase</b> and <b>Amazon AWS</b> as well.
          </p>
        </div>
        <div className="right-side logos">
          <div className="top">
            <ExpressSVG className="svg" />
            <NodeJsSVG className="svg" />
            <GraphQLSVG className="svg" />
          </div>
          <div>
            <MongoDBSVG className="svg" />
            <MYSQLSVG className="svg" />
            <FirebaseSVG className="svg" />
          </div>
        </div>
      </div>
      <div className="skills-category">
        <div className="left-side logos">
          <div className="top">
            <PhotoshopSVG className="svg" />
            <CSSSVG className="svg" />
            <SASSSVG className="svg" />
          </div>
          <div className="bottom">
            <XDSVG className="svg" />
            <IllustratorSVG className="svg" />
          </div>
        </div>
        <div className="right-side">
          <h3>Designing & Layout</h3>
          <p>
            I primarily focus on building the layout with Adobe XD before coding
            anything as it allows for further consideration of the User's
            experience. Alongside this, I use <b>Photoshop</b> and{" "}
            <b>Illustrator</b> to make SVGs and animations. My go-to for Website
            styling is usually <b>SASS</b>
          </p>
        </div>
      </div>
    </section>
  );
});

export default Skills;
