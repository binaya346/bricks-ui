import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Buttons from "./pages/Buttons";
import Tooltip from "./pages/Tooltip";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/buttons">
            <Buttons />
          </Route>
          <Route path="/tooltip">
            <Tooltip />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
