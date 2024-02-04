import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Timeline from './components/Timeline';
import Tweet from './components/Tweet';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/timeline" component={Timeline} />
        <Route path="/tweet/:tweetId" component={Tweet} />
      </Routes>
    </div>
  );
}

export default App;
