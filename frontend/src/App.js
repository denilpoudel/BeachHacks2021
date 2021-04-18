import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import * as ROUTES from "./Constants/routes"
import Home from "./Components/Home/Home";


function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;