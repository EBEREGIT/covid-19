import React from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import GlobalReport from "./components/GlobalReport";
import NavComponent from "./components/NavComponent";
import CountriesReport from "./components/CountriesReport";
import TreandingNews from "./components/TreandingNews";

function App() {
  return (
    <div className="App">
      <NavComponent />

      <Switch>
        <Route exact path="/" component={GlobalReport} />
        <Route path="/countries" component={CountriesReport} />
        <Route path="/trending" component={TreandingNews} />
      </Switch>
    </div>
  );
}

export default App;