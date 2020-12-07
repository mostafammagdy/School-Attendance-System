import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
 
import Teacher from "./components/teacher.component"
import Admins from "./components/admins.component"
function App() {
 return (
  <Router>
  <Teacher/>
      
  </Router>

 );
}
 
export default App;