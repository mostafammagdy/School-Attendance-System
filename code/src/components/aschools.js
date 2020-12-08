import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./styles.css"
import axios from 'axios';




// const Students = props => (
//     <tr class="attendance">
//             <td><input type="hidden" value={props.student.username}/>{props.student.username}</td>
//             <td><input type="radio" name={props.student.username} value="present"/>&nbsp;</td>
//             <td><input type="radio" name={props.student.username} value="absent" />&nbsp;</td>
//             <td><input type="radio" name={props.student.username} value="late"/>&nbsp;</td>
//     </tr>
// )

export default class aschools extends Component {
    
    // routeChange=()=> {
    //     let path = `newPath`;
    //     let history = useHistory();
    //     history.push(path);
    //   }

    

    schoolTable() {
        return (
        
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>Name</th>
                        <th>Picture</th>
                        <th>Location</th>
                        <th>Population</th>
                    </tr>
                </thead>
                <tbody>
          <tr>
            <th scope="row">A. Y. Jackson Secondary School</th>
            <td class="w-25">
			      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/A._Y._Jackson_Secondary_School_%28Toronto%29.jpg/2880px-A._Y._Jackson_Secondary_School_%28Toronto%29.jpg" class="img-fluid img-thumbnail" alt="Sheep">
		      </img>
              </td>
            <td>North York</td>
            <td>1,055</td>
            <td>
            </td>
          </tr>
          <tr>
            <th scope="row">Agincourt Collegiate Institute</th>
            <td class="w-25">
			      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Agincourt_Collegiate_Institute.JPG/300px-Agincourt_Collegiate_Institute.JPG" class="img-fluid img-thumbnail" alt="Sheep">
		      </img>
              </td>
            <td>Scarborough</td>
            <td>1,236</td>
            <td>
           
            </td>
          </tr>
          <tr>
            <th scope="row">Birchmount Park Collegiate Institute</th>
            <td class="w-25">
			      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Birchmount_Park_Collegiate_Institute.JPG/298px-Birchmount_Park_Collegiate_Institute.JPG" class="img-fluid img-thumbnail" alt="Sheep">
		      </img>
              </td>
            <td>Scarborough</td>
            <td>849</td>
            <td>
        
            </td>
          </tr>
          <tr>
            <th scope="row">C. W. Jefferys Collegiate Institute</th>
            <td class="w-25">
			      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/C.W._Jefferys_Collegiate_Institute.JPG/300px-C.W._Jefferys_Collegiate_Institute.JPG" class="img-fluid img-thumbnail" alt="Sheep">
		      </img>
              </td>
            <td>North York</td>
            <td>731</td>
            <td>
        
            </td>
          </tr>
          <tr>
            <th scope="row">Central Toronto Academy</th>
            <td class="w-25">
			      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Central_Toronto_Academy_%2837601930775%29.jpg/300px-Central_Toronto_Academy_%2837601930775%29.jpg" class="img-fluid img-thumbnail" alt="Sheep">
		      </img>
              </td>
            <td>Toronto</td>
            <td>537</td>
            <td>
 
            </td>
          </tr>
          <tr>
            <th scope="row">Don Mills Collegiate Institute</th>
            <td class="w-25">
			      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Don_Mills_Collegiate_Institute.JPG/300px-Don_Mills_Collegiate_Institute.JPG" class="img-fluid img-thumbnail" alt="Sheep">
		      </img>
              </td>
            <td>North York</td>
            <td>1,055</td>
            <td>
        
            </td>
          </tr>
          <tr>
            <th scope="row">Lawrence Park Collegiate Institute</th>
            <td class="w-25">
			      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Lawrence_Park_Collegiate_Institute.JPG/300px-Lawrence_Park_Collegiate_Institute.JPG" class="img-fluid img-thumbnail" alt="Sheep">
		      </img>
              </td>
            <td>Toronto</td>
            <td>1,162</td>
            <td>
          
            </td>
          </tr>
          <tr>
            <th scope="row">Parkdale Collegiate Institute</th>
            <td class="w-25">
			      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Parkdale_Colleiate_Institute.JPG/300px-Parkdale_Colleiate_Institute.JPG" class="img-fluid img-thumbnail" alt="Sheep">
		      </img>
              </td>
            <td>Toronto</td>
            <td>500</td>
            <td>
        
            </td>
          </tr>
          <tr>
            <th scope="row">Thistletown Collegiate Institute</th>
            <td class="w-25">
			      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Thistletown_Collegiate_Institute.jpg/300px-Thistletown_Collegiate_Institute.jpg" class="img-fluid img-thumbnail" alt="Sheep">
		      </img>
              </td>
            <td>Etobicoke</td>
            <td>485</td>
            <td>
       
            </td>
          </tr>
          <tr>
            <th scope="row">York Memorial Collegiate Institute</th>
            <td class="w-25">
			      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/York_Memo_Coll.JPG/300px-York_Memo_Coll.JPG" class="img-fluid img-thumbnail" alt="Sheep">
		      </img>
              </td>
            <td>York</td>
            <td>871</td>
            <td>
       
            </td>
          </tr>
        </tbody>
            </table>
                
        );
    }

    classSelect() {
        return (
            <div>
                <select className="custom-select" id="classname"
                    value={this.state.classroom}
                    onChange={this.onChangeClassroom}>
                    {this.state.classrooms.map(classroom => (
                        <option key={classroom.classname} value={classroom.classname}>{classroom.classname}</option>
                    ))}
                </select>
            </div>
        );

    }

   
   
    render() {
        return (
            <div>
                <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
                    <a class="navbar-brand" href="/secretary">Secretary</a>
                    <button class="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" href="#"><i class="fas fa-bars"></i></button>
                    {/*<!-- Navbar Search-->*/}
                    <form class="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
                        <div class="input-group">
                            <input class="form-control" type="text" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                            <div class="input-group-append">
                                <button class="btn btn-primary" type="button"><i class="fas fa-search"></i></button>
                            </div>
                        </div>
                    </form>
                    {/*<!-- Navbar-->*/}
                    <ul class="navbar-nav ml-auto ml-md-0">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="userDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-user fa-fw"></i></a>
                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                                <a class="dropdown-item" href="#">Settings</a>
                                <a class="dropdown-item" href="#">Activity Log</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="login.html">Logout</a>
                            </div>
                        </li>
                    </ul>
                </nav>
                <div id="layoutSidenav">
                    <div id="layoutSidenav_nav">
                        <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                            <div class="sb-sidenav-menu">
                                <div class="nav">
                                    <div class="sb-sidenav-menu-heading">Core</div>
                                    <a class="nav-link" href="/secretary">
                                        <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                                        Dashboard
                            </a>
                                   
                            

                                    <div class="collapse" id="collapsePages" aria-labelledby="headingTwo" data-parent="#sidenavAccordion">
                                        <nav class="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                                                Authentication
                                        <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                                            </a>
                                            <div class="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-parent="#sidenavAccordionPages">
                                                <nav class="sb-sidenav-menu-nested nav">
                                                    <a class="nav-link" href="login.html">Login</a>
                                                    <a class="nav-link" href="register.html">Register</a>
                                                    <a class="nav-link" href="password.html">Forgot Password</a>
                                                </nav>
                                            </div>
                                            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                                                Error
                                        <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                                            </a>
                                            <div class="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-parent="#sidenavAccordionPages">
                                                <nav class="sb-sidenav-menu-nested nav">
                                                    <a class="nav-link" href="401.html">401 Page</a>
                                                    <a class="nav-link" href="404.html">404 Page</a>
                                                    <a class="nav-link" href="500.html">500 Page</a>
                                                </nav>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            <div class="sb-sidenav-footer">
                                <div class="small">Logged in as:</div>
                    </div>
                        </nav>
                    </div>
                    <div id="layoutSidenav_content">
                        <main>
                            <div class="container-fluid">
                               
                               
                                <div class="row">
                               
                                <div class="col">
                                </div>
                                </div>
                                <hr/>
                                <div class="row">
                                    <div class="col">
                                    {this.schoolTable()}
                                    </div>
                                </div>
                                <div class="col-3">
                                   

                                </div>

                                <div class="row test">
                                </div>
                            </div>
                        </main>
                        <footer class="py-4 bg-light mt-auto">
                            <div class="container-fluid">
                                <div class="d-flex align-items-center justify-content-between small">
                                    <div class="text-muted">Copyright &copy; School System 2020</div>
                                    <div>
                                        <a href="#">Privacy Policy</a>
                                        &middot;
                                <a href="#">Terms &amp; Conditions</a>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        );
    }
}
