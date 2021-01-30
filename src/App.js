import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import TopNav from './components/TopNav';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Error from './pages/Error';


const useStyles = makeStyles((theme) => ({

}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <BrowserRouter>
        <TopNav />
        <div>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/about" component={About}/>
            <Route path="/resume" component={Resume}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/contact" component={Contact}/>
            <Route component={Error}/>
          </Switch>
        </div> 
      </BrowserRouter>
      
    </div>
  );
}

export default App;
