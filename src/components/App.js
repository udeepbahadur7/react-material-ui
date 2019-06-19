import React, { Component, Fragment } from "react";
import { Header, Footer } from "./layouts";
import Exercise from "./Exercise";
export default class extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Exercise />
        <Footer />
      </Fragment>
    );
  }
}
