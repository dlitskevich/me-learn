import React from 'react';
import { HashRouter, Route, RouteProps, Switch } from 'react-router-dom';
import './App.css';
import './services/auth';
import './services/localStorage';
import { Navigation } from './components/Navigation';
import { Home } from './components/Home';
import { Error } from './components/Error';
import { LearnPage } from './pages/LearnPage';
import { useUser } from './hooks/useUser';
import { TrainPage } from './pages/TrainPage';
import { CourseListPage } from './pages/CourseListPage';
import { CoursePage } from './pages/CoursePage';
import { UnitPage } from './pages/UnitPage';

function App() {
  return (
    <HashRouter>
      <>
        <Navigation />
        <div className="app container">
          <Switch>
            <Route path="/" component={Home} exact />
            <GuardedRoute path="/learn" component={LearnPage} />
            <Route path="/courses" exact component={CourseListPage} />
            <Route path="/courses/:language/:courseName" exact component={CoursePage} />
            <Route path="/courses/:language/:courseName/:unit" component={UnitPage} />
            <Route path="/train/:language/:courseName/:unit" component={TrainPage} />
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
