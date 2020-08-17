import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// import react router
import { BrowserRouter, Route } from 'react-router-dom'

/* Components */
import Main     from './Components/Main';
import About    from './Components/About';
import Blog     from './Components/Blog';
import Contact  from './Components/Contact';
import Discover from './Components/Discover';

const App = () => (
  <BrowserRouter>
        <Route path="/"         component={Main}     />
        <Route path="/about"    component={About}    />
        <Route path="/blog"     component={Blog}     />
        <Route path="/contact"  component={Contact}  />
        <Route path="/discover" component={Discover} />
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();