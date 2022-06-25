import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
// import Home from "./components/Home";
// import Services from "./components/Services";

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                {/* <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
        </Switch>*/}
            </Router>
        </div>
    );
}

export default App;
