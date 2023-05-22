import './App.css';
import Homepage from './components/homepage/homepage'
import Login from './components/login/login'
import Register from './components/register/register';
import{BrowserRouter as Router,Route } from "react-router-dom";
import {useState} from 'react';
import Main from './components/Main/main';
function App() {
  const[user,setLoginUser]=useState({})
  return (
    <div className="App">
      <Router>
          <Route exact path="/">
            <Login/>
          </Route>
          <Route exact path="/register">
            <Register/>
          </Route>
          <Route exact path="/home">
            <Homepage/>
          </Route>
          <Route exact path="/main">
            <Main/>
          </Route>
      </Router>
    </div>
  );
}

export default App;
