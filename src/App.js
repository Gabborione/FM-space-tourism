import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Destination from "./components/Destination";
import Crew from "./components/Crew";
import { useState, useEffect } from "react";

function App() {
    const [planets, setPlanets] = useState([]);
    const [crews, setCrews] = useState([]);

    useEffect(() => {
        const getData = async () => {
            await fetch("data.json")
                .then((response) => response.json())
                .then((data) => {
                    setPlanets(data.destinations);
                    setCrews(data.crew);
                });
        };

        getData();
    }, []);

    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route exact path="/" element={<Home />}></Route>
                    <Route
                        exact
                        path="/destination"
                        element={<Destination planets={planets} />}
                    />
                    <Route
                        exact
                        path="/crew"
                        element={<Crew crews={crews} />}
                    />
                    <Route exact path="/technology" />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
