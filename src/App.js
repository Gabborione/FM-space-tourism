import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
// import Home from "./components/Home";
// import Services from "./components/Services";

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route exact path="/" />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
