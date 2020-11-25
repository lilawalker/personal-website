import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Profile from './Profile';
import Projects from './Projects';
import Experience from './Experience';
import Interests from './Interests';
import Contact from './Contact';
import 'fontsource-permanent-marker';
import 'typeface-roboto';

const App = () => {

  const LI = ({ children }) => {
    return <li className="inline-block mr-4 lg:mr-0 lg:ml-20">{children}</li>
  }
  
  return (
    <Router>
      <div className="font-sans sticky top-0 bg-black w-full pb-1 lg:pb-0">
        <nav className="lg:flex justify-between text-pink-700">
          <h1 className="text-4xl lg:my-1 font-logo lg:pl-10 text-center hover:text-pink-400 active:text-pink-300">
            <NavLink to="/">Lila Walker</NavLink>
          </h1>
          <ul className="lg:mt-6 lg:pr-10 text-center font-logo">
            <LI>
              <NavLink to="/profile" className="hover:text-pink-400 active:text-pink-300">Profile</NavLink>
            </LI>
            <LI>
              <NavLink to="/projects" className="hover:text-pink-400 active:text-pink-300">Projects</NavLink>
            </LI>
            <LI>
              <NavLink to="/experience" className="hover:text-pink-400 active:text-pink-300">Experience</NavLink>
            </LI>
            <LI>
              <NavLink to="/interests" className="hover:text-pink-400 active:text-pink-300">Interests</NavLink>
            </LI>
            <LI>
              <NavLink to="/contact" className="hover:text-pink-400 active:text-pink-300">Contact</NavLink>
            </LI>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route path="/profile">
          <Profile/>
        </Route>
        <Route path="/projects">
          <Projects/>
        </Route>
        <Route path="/experience">
          <Experience/>
        </Route>
        <Route path="/interests">
          <Interests/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="/">
          <Profile/>
        </Route>
      </Switch>
    </Router>
  );  
}

export default App;
