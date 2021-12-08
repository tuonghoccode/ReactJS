import React from 'react'
import {BrowserRouter as Router,Link ,Switch, Route} from 'react-router-dom'
import Navigation from './Navigation'
function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/Work">Work</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/" >
          <h1>Welcome to Website!</h1>
           </Route>
        <Route  path="/home" component={Navigation} />
        <Route  path="/about" component={About} />
      </Switch>
    </Router>
  );
}

function Home(){
  return(
    <h1>Home</h1>
  )
}
function About() {
  return <h1>About</h1>;
}

export default App
