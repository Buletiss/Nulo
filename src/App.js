import React from "react";
import "./App.css";
import ImageBox from "./components/ImageBox";
import TopBar from "./components/TopBar";

import Aboutimage from "./assets/aboutimg.jpeg";

function App() {
    return (
        <>
            <div className="Container">
                <div>
                    <TopBar />
                </div>
                <p className="Paragrafo">
                    "Neque porro quisquam est qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit..." "Não há quem goste de
                    dor"
                </p>
                <div className="home-container">
                    <div className="Title">
                        <h1>Creative</h1>
                        <h2>Design</h2>
                    </div>
                    <button className="button-59">Get Start</button>
                    <div className="portfolio-container">
                        <h3>Portfólio</h3>
                    </div>
                    <ImageBox />
                    <h4>About</h4>
                    <div className="about-container">
                        <p>
                            We create stunning Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.We create stunning Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                            <br />
                            <br />
                            After 10 years of experience Lorem ipsum dolor sit
                            amet, consectetur adipiscing elit.We create stunning
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.We create stunning Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit
                        </p>
                        <img src={Aboutimage} alt="aboutimage" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
