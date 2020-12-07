import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
 
import Teacher from "./components/teacher.component"
import Login from './components/login.component';
import Secretary from './components/secretary.component';
import newTeacher from './components/createTeacher.component';
import classroom from './components/createClassroom';
import aschool from './components/aschools';





function App() {
 return (
<Router>
      <div className="container">
      <br/>
      <Route path="/" exact component={Login} />
      <Route path="/teacher" component={Teacher} />
      <Route path="/secretary" component={Secretary} />
      <Route path="/new" component={newTeacher} />
      <Route path="/newClassroom" component={classroom} />
      <Route path="/aschool" component={aschool} />




  
      </div>
    </Router>      

 );
}
 
export default App;