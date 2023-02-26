import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CharacterList from "./components/CharacterList";
import CharacterDetails from "./components/CharacterDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <CharacterList />
        </Route>
        <Route path="/character/:id">
          <CharacterDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
