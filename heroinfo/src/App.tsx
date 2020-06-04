import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./Components/Home/home";

export const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
};
