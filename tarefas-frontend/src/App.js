import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./home";
import novaTarefa from "./novaTarefa";

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/"></Link>
        <Link to="/novaTarefa"></Link>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/novaTarefa" component={novaTarefa} />
      </Switch>
    </Router>
  );
}

export default App;
