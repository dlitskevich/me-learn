import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import './services/auth';
import { AuthPage } from './pages/AuthPage';
import { Navigation } from './components/Navigation';
import { About } from './components/About';
import { Home } from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
  // <div className="App">
  //   <header className="App-header">
  //     <AuthPage />

  //     <a
  //       className="App-link"
  //       href="https://reactjs.org"
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       Learn React
  //     </a>
  //   </header>
  // </div>
  );
}

export default App;
