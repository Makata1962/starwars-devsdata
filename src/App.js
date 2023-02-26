import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import CharacterList from "./components/CharacterList";
import CharacterDetails from "./components/CharacterDetails";

const App = () => {
  return (
    <div className="main-container">
      <Switch>
        <Route exact path="/">
          <CharacterList />
        </Route>
        <Route path="/character/:id">
          <CharacterDetails />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
