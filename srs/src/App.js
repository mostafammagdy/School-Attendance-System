import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
 
import Navbar from "./components/navbar.component"
import Teacher from "./components/teacher.component"

function App() {
 return (
  <Router>
  <Teacher/>
      
   </Router>

 );
}
 
export default App;