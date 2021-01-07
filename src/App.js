import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import './App.css';
import Navbar from './Navbar/Navbar';
import HomeBody from './HomeBody/HomeBody';
import History from './History/History';
import Schedules from './Schedules/Schedules';

const App = () => {
  const [ scrollTop, setScrollTop ] = useState(0);
  const myRef = useRef();

  const onScroll = () => {
    const scrollY = window.scrollY;
    const scrollTop = myRef.current.scrollTop;
    setScrollTop(scrollTop);
  }

  return (
    <div ref={myRef} onScroll={onScroll} className="app">
      <Router>
        <Route path="/">
          <Navbar scrollTop={scrollTop} ref={myRef} />
            <Fade top>
              <HomeBody />
            </Fade>
          <History />
          <Schedules />
        </Route>
      </Router>
    </div>
  );
}

export default App;
