import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import challenges from "./challenges";
import Card from "./Components/Card/Card";

const App = () => {
  const [component, setComponent] = useState(null);
  const [sourceLink, setSourceLink] = useState(null);
  return (
    <div>
      <Navbar />
      <div className="challenges-div">
        <div className="cards-div">
          {!component &&
            challenges.map((value, key) => {
              return (
                <Card
                  key={key}
                  name={value.name}
                  contributors={value.contributors}
                  source={value.source}
                  onClick={(component, source) => {
                    setComponent(component);
                    setSourceLink(source);
                  }}
                  component={value.component}
                />
              );
            })}
        </div>

        {component}

        <div className="footer-div">
          {component && <a href={sourceLink}>Source Code</a>}

          {component && (
            <button className="go-back-btn" onClick={() => setComponent(null)}>
              Go Back
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
