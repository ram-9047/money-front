import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import AddData from "./AddData";
import AllData from "./AllBond";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={AllData} />
          <Route path="/add" component={AddData} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
