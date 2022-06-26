import React from "react";
import styled from "styled-components";

const Destination = () => {
    return (
        <div>
            <div>
                <h2>
                    <span>01</span> PICK YOUR DESTINATION
                </h2>
                <div>
                    <img />
                </div>
            </div>
            <div>
                <ul>
                    <li>MOON</li>
                    <li>MARS</li>
                    <li>EUROPA</li>
                    <li>TITAN</li>
                </ul>
                <h1>MOON</h1>
                <p>
                    See our planet as you’ve never seen it before. A perfect
                    relaxing trip away to help regain perspective and come back
                    refreshed. While you’re there, take in some history by
                    visiting the Luna 2 and Apollo 11 landing sites.
                </p>

                <hr />

                <h3>Avg. distance</h3>
                <h1>384,400 km</h1>
                <h3>est. travel time</h3>
                <h1>3 days</h1>
            </div>
        </div>
    );
};

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    max-width: 100vw;
    max-height: 100vh;
`;

export default Destination;
