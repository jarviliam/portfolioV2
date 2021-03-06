import React, { Component } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Loader from "./components/Loader";
import Navigation from "./components/Navigation";
import Skills from "./components/Skills";
import Works from "./components/Works";

import "./sass/main.scss";

class App extends Component<{}, {}> {
  public refArray: any[];
  private setRef: () => any;
  constructor(props: {}) {
    super(props);
    this.refArray = [];
    this.setRef = () => {
      const ref = React.createRef();
      this.refArray.push(ref);
      return ref;
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleClick(ref: number) {
    this.refArray[ref].current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
  render() {
    return (
      <div className="App">
        <Loader />
        <Navigation handleClick={this.handleClick} />
        <Hero handleClick={this.handleClick} ref={this.setRef()} />
        <Skills ref={this.setRef()} />
        <Works ref={this.setRef()} />
        <Footer />
      </div>
    );
  }
}

export default App;
