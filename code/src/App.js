import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
 
import Teacher from "./components/teacher.component"
import Login from './components/login.component';

function App() {
 return (
  <Router>
  <Login/>
      
  </Router>

 );
}
 
export default App;