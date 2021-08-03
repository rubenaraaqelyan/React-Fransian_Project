import React from "react";
import TopSLider from "./topSlider";
import Team from "./Team";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import { BrowserRouter, Route } from "react-router-dom";
import Terms from "./Terms";



const Home = () => {
    return (
        <>
            <section>
                <div>
                    <TopSLider />
                    <Team />
                    <About  />
                    <Service  />
                    <Contact  />
                </div>
            </section>
        </>
    );
};

export default Home;
