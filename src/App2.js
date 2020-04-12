import React from "react";
import { browserHistory } from "react-router";
import { withRouter } from "react-router";
import { history } from "./index.js";

class App extends React.Component {
  render() {
    console.log(this.props.location.query.name);

    return (
      <button
        onClick={() => {
          const uri = new URL(document.referrer).pathname;
          browserHistory.push(uri);
        }}
      >
        go to all speakers
      </button>
    );
  }
}

export default App;
