import React from "react";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage";
import {AboutPage} from "../pages/AboutPage";
import {ProjectPage} from "../pages/ProjectPage";
import {PastWorkExperiencePage} from "../pages/PastWorkExperiencePage";

{/* flex items-center -> makes list horizontal
            p-4 -> padding to all sides of our items inside list
            bg -> background color
            space-x-4 -> adds spacing in between items of our list */}

export const NavBar: React.FC = () => (
    <div className="NavBar">
        <ul className="flex items-center p-0 space-x-5 text-white bg-Dove-Gray">
            <li className = "hover:bg-black p-4 "><Link to="/pages/HomePage">Home</Link></li>
            <li className = "hover:bg-black p-4"><Link to="/pages/AboutPage">About Me</Link></li>
            <li className = "hover:bg-black p-4"><Link to="/pages/ProjectPage">Personal Projects</Link></li>
            <li className = "hover:bg-black p-4"><Link to="/pages/PastWorkExperiencePage">Previous Work Experience</Link></li>
        </ul>
    </div>
);

export const NavBarController: React.FC = ()  => (
    <div className="NavBarController">
        <Router>
            <NavBar/>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path = "/pages/HomePage" element ={<HomePage />}> </Route>
                <Route path = "/pages/AboutPage" element ={<AboutPage />}> </Route>
                <Route path = "/pages/ProjectPage" element ={<ProjectPage />}> </Route>
                <Route path = "/pages/PastWorkExperiencePage" element ={<PastWorkExperiencePage/>}></Route>
            </Routes>
        </Router>
    </div>
);
