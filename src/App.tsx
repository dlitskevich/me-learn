import React from 'react';
import { BrowserRouter, Route, RouteProps, Switch } from 'react-router-dom';
import './App.css';
import './services/auth';
import './services/localStorage';
import { Navigation } from './components/Navigation';
import { About } from './components/About';
import { Home } from './components/Home';
import { Error } from './components/Error';
import { LearnPage } from './pages/LearnPage';
import { WordsPage } from './pages/WordsPage';
import { useUser } from './hooks/useUser';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <GuardedRoute path="/learn" component={LearnPage} />
          <GuardedRoute path="/words" component={WordsPage} />
          <Route component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

const GuardedRoute : React.FC<RouteProps> = ({ component, ...props }) => {
  const user = useUser();
  if (!user) {
    return <Route {...props} component={Home} />;
  }
  return (
    <Route {...props} component={component} />
  );
};
