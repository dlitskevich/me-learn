import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import './services/auth';
import { Navigation } from './components/Navigation';
import { About } from './components/About';
import { Home } from './components/Home';
import { LearnPage } from './pages/LearnPage';
import { WordsPage } from './pages/WordsPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/learn" component={LearnPage} />
          <Route path="/words" component={WordsPage} />
          <Route component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
