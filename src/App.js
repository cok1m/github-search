import React from 'react';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { About } from './pages/About';
import { Profile } from './pages/Profile';
import { AlertComponent } from './components/AlertComponent';
import { AlertState } from './context/alert/AlertState'
import { GithubState } from './context/github/GithubState';


function App() {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <div className='container pt-4'>
            <AlertComponent alert={{text: 'Test Alert'}} />
            <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/profile/:name" component={Profile} />
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  );
}

export default App;
