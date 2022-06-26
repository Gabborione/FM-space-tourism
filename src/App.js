import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Destination from "./components/Destination";
// import Services from "./components/Services";

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route exact path="/" element={<Home />}></Route>
                    <Route
                        exact
                        path="/destination"
                        element={<Destination />}
                    />
                    <Route exact path="/crew" />
                    <Route exact path="/technology" />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
