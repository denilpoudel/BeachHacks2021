import "./App.css";
import "semantic-ui-css/semantic.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import { Home } from "./Components/Home";
import { AnySpot } from "./Components/AnySpot";
import { About } from "./Components/About";
import { SpecificSpot } from "./Components/SpecificSpot";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/anyspot" component={AnySpot} />
          <Route path="/about" component={About} />
          <Route path="/specificspot" component={SpecificSpot} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
