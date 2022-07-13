import {
    BrowserRouter as Router,
    Routes,
    Route,
    useRef,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Destination from "./components/Destination";
import Crew from "./components/Crew";
import { useState, useEffect } from "react";
import Technology from "./components/Technology";

function App() {
    const [planets, setPlanets] = useState([]);
    const [crews, setCrews] = useState([]);
    const [technologies, setTechnologies] = useState([]);
    const alreadyLoaded = useRef(false);

    useEffect(() => {
        if (!alreadyLoaded.current) {
            const getData = async () => {
                await fetch("data.json")
                    .then((response) => response.json())
                    .then((data) => {
                        setPlanets(data.destinations);
                        setCrews(data.crew);
                        setTechnologies(data.technology);
                    });
            };

            getData();

            alreadyLoaded.current = true;
        }
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
                    <Route
                        exact
                        path="/technology"
                        element={<Technology technologies={technologies} />}
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
