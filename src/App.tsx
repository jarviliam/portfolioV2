import React, { Component } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Loader from "./components/Loader";
import Navigation from "./components/Navigation";
import Skills from "./components/Skills";
import Works from "./components/Works";

import "./sass/main.scss";

class App extends Component<{}, {}> {
  public refArray: HTMLDivElement[];
  private setRef: (ref: any) => void;
  constructor(props: {}) {
    super(props);
    this.refArray = [];
    this.setRef = (ref: any) => {
      this.refArray.push(ref);
    };

    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    console.log("mount");
    window.scrollTo(0, 0);
  }
  handleClick(ref: number) {
    this.refArray[ref].scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
  render() {
    return (
      <div className="App">
        <Loader />
        <Navigation handleClick={this.handleClick} />
        <Hero ref={(ref: any) => this.setRef(ref)} />
        <Skills ref={(ref: any) => this.setRef(ref)} />
        <Works ref={(ref: any) => this.setRef(ref)} />
        <Footer ref={(ref: any) => this.setRef(ref)} />
      </div>
    );
  }
}

export default App;
