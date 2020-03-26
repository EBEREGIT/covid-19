import React from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import GlobalReport from "./components/GlobalReport";
import NavComponent from "./components/NavComponent";
import CountriesReport from "./components/CountriesReport";

function App() {
  return (
    <div className="App">
      <NavComponent />

      <Switch>
        <Route exact path="/" component={GlobalReport} />
        <Route path="/countries" component={CountriesReport} />
      </Switch>
    </div>
  );
}

export default App;
