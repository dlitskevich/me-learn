import React from 'react';
import { HashRouter, Route, RouteProps, Switch } from 'react-router-dom';
import './App.css';
import './services/auth';
import './services/localStorage';
import { Navigation } from './components/Navigation';
import { Home } from './components/Home';
import { Error } from './components/Error';
import { LearnPage } from './pages/LearnPage';
import { WordsPage } from './pages/WordsPage';
import { useUser } from './hooks/useUser';
import { TrainPage } from './pages/TrainPage';

function App() {
  return (
    <HashRouter>
      <>
        <Navigation />
        <div className="app container">
          <Switch>
            <Route path="/" component={Home} exact />
            <GuardedRoute path="/learn" component={LearnPage} />
            <GuardedRoute path="/words" component={WordsPage} />
            <Route path="/train" component={TrainPage} />
            <Route component={Error} />
          </Switch>
        </div>
      </>
    </HashRouter>
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
