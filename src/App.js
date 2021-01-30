import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import TopNav from './components/TopNav';
import BottomNav from './components/BottomNav';


import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Error from './pages/Error';



const useStyles = makeStyles((theme) => ({
  app: {
    height: "100%",
  },
  content: {
    minHeight: "100%",
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <BrowserRouter>
        <TopNav />
        <div className={classes.content}>
          <div>
            <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/about" component={About}/>
              <Route path="/resume" component={Resume}/>
              <Route path="/projects" component={Projects} exact/>
              <Route path="/projects/:id" component={Project}/>
              <Route path="/contact" component={Contact}/>
              <Route component={Error}/>
            </Switch>
          </div>
          <BottomNav />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
