import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Particles from "react-tsparticles";
import './App.css';
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Help from "./pages/Help";
import Home from "./pages/Home";
import Share from "./pages/Share";
import particlesOptions from "./particles.json";


function App() {
    return (
        <div className="App">
            <NavBar />
            <Particles options={particlesOptions}/>
            
            <div
                style={{
                    width: "100%",
                    height: "500%",
                    backgroundColor: "white",
                }}
            >

            </div>
            <BrowserRouter>
                <Routes >
                    <Route path="/unicef" element={<Home/>}>
                        <Route index element={<Home/>} />
                    </Route>
                    
                    <Route path="/unicef/share" element={<Share/>} />
                    <Route path="/unicef/help" element={<Help/>} />
                    <Route path="/unicef/about" element={<About />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
