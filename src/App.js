import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import './App.css';
import image from './images/pixlr-bg-result.png';

function App() {

  const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    padding: 10px 35px;
    font-size: 1.25rem;
    transition: .3s;
    font-family: 'Amatic SC', cursive;
    font-size: 1.7rem;
    &:hover {
      background: white;
      color: #4f4f4f;
    }
  `;

  return (
    <div className="App">
      <header>
        <div className="logo">
            <img src={image} alt='tree-logo'/>
        </div>
        <nav>
          <Router>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/about">About Me</StyledLink>
            <a href="https://web-module-project-async-redux-qbe58z19u-samplesn08.vercel.app/">Deployed Redux Project</a>
            <StyledLink to="/contact">Contact</StyledLink>
            <Switch>
              <Route path='/about'>
                
              </Route>
              <Route path='/projects'>
                
              </Route>
              <Route path='/contact'>
                
              </Route>
              <Route exact path='/'>
                
              </Route>
            </Switch>
          </Router>
        </nav>
      </header>
    <section className="splash">
        {/* <!-- splash image with text --> */}
        <h1>Nicholas Samples</h1>
        <h3>Full-Stack Web Development</h3>
    </section>
    <section className="services">
        <h2>Service offerings:</h2>
        <div className="container">
            <div className="grid">
                {/* <!-- image --> */}
                <h4>Full-Stack Developer</h4>
                <p>Construction of complete projects, both front-end and back-end.  Customize every aspect!</p>
            </div>
            <div className="grid">
                {/* <!-- image --> */}
                <h4>Front-end/UX Design</h4>
                <p>Develop your app or site with the needs of the end-user in mind!  Fully responsive and accessible to all.</p>
            </div>
            <div className="grid">
                {/* <!-- image --> */}
                <h4>Back-end/Server-side Construction</h4>
                <p>Use the power of Javascript to make your app or website work for YOU, giving you the data you need easily and efficiently.</p>
            </div>
            <div className="grid">
                {/* <!-- image --> */}
                <h4>Node.JS</h4>
                <p>The cutting edge of modern web development.  Fully experienced and ready to work for you!</p>
            </div>
        </div>
    </section>
    <footer>
        <h3>--- WANT TO KNOW MORE? ---</h3>
        <nav className="social">
            <a href="http://www.github.com/samplesn08">GitHub</a>
            <a href="https://www.linkedin.com/in/nicholas-samples/">LinkedIn</a>
            <a href="https://www.instagram.com/samplesn08/">Instagram</a>
        </nav>
        <p>Copyright &copy; Nicholas Samples 2021</p>
    </footer>
    </div>
  );
}

export default App;
