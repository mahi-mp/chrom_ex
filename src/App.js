// eslint-disable-next-line no-redeclare
/*global chrome*/
import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const [url, setUrl] = useState("");

  /**
   * Get current URL
   */
  useEffect(() => {
    const queryInfo = { active: true, lastFocusedWindow: true };

    chrome.tabs &&
      chrome.tabs.query(queryInfo, (tabs) => {
        console.log("tabs", tabs);
        const url = tabs[0].url;
        setUrl(url);
      });
  }, []);

  console.log("chrome", chrome);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>URL:</p>
        <p>{url}</p>
      </header>
    </div>
  );
};

export default App;

// import React, { Component } from "react";
// import logo from "./logo.svg";
// import "./App.css";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { showHeader: true };
//     this.handleClick = this.handleClick.bind(this);
//     chrome.runtime.sendMessage({ action: "popupOpen" }).bind(this);
//   }

//   handleClick() {
//     console.log("clicked");
//     this.setState((prevState) => ({
//       showHeader: !prevState.showHeader,
//     }));
//   }
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           {this.state.showHeader && <h2>Welcome to React Jon</h2>}
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//         <button onClick={this.handleClick}>
//           {this.state.showHeader ? "HIDE" : "SHOW"}
//         </button>
//       </div>
//     );
//   }
// }

// export default App;
