import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Button from "./pages/Button";
import Tooltip from "./pages/Tooltip";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/button">
            <Button />
          </Route>
          <Route path="/tooltip">
            <Tooltip />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
