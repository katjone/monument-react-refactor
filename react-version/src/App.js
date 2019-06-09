import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer';
import Nav from './components/Nav';
import './App.css';

const App = () => 
      <div className="App">
          <Nav />
          <Switch>
            <Route path="/blog.html" component={ Blog } />
            <Route path="/" component={ Landing } />
          </Switch>
          <Footer />
      </div>

export default App;
