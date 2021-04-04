import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./screens/Home/Home";

function App() {
  return (
    // BEM
    <div className="App">
      <Router>
        <Switch>
          <Route path="/search">
            <h1> Search page </h1>
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
