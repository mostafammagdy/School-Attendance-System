import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./styles.css"
import axios from 'axios';

const CreatesecButton = props => {
    return <button type="button" className="btn btn-primary" onClick={props.addTrip}>Create Secretary Account</button>
  } 



export default class admins extends Component {
    
    // routeChange=()=> {
    //     let path = `newPath`;
    //     let history = useHistory();
    //     history.push(path);
    //   }

    constructor(props) {
        super(props);
        
       
        this.showSchool = this.showSchool.bind(this);
        this.createAcc = this.createAcc.bind(this);
        this.manageAcc = this.manageAcc.bind(this);
        this.searchAcc = this.searchAcc.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeRole = this.onChangeRole.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = { 
            school: '',
            status: '',
            create: '',
            manage: '',
            search: '',
            username: "",
            password: "",
            child: "",
            role: "Regular Teacher",
            name: "",
            parents: [],
            students: [],
            teachers: [],
            currentstudent: [],
            classrooms: [] 
        };
    }
    

    

      componentDidMount() {
        axios.get('http://localhost:5000/secretarys/')
            .then(response => {
                this.setState({ secretarys: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
        }

    onChangeClassroom(e) {
        var temp = []
            this.state.secretarys.forEach((s) => {
            if (s.classname == e.target.value){
                temp.push(s);
            }            
    })
    console.log(temp);

        this.setState({
            classroom: e.target.value,
            currentstudent: temp
        })
    }

    manageAccounts() {
        return (
            <div>
                <h1> Manage Account </h1>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Name</th>
                            <th>School Name</th>
                            <th>Edit </th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        );
    }

    searchAccounts() {
        return (
            <div>
                <h1> Search Account </h1>
                </div>
        );
    }


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
            <button type="button" className="btn btn-primary">Create Secretary Account</button>
            <button type="button" className="btn btn-primary">Manage Secretary Account</button>
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
            <button type="button" className="btn btn-primary">Create Secretary Account</button>
            <button type="button" className="btn btn-primary">Manage Secretary Account</button>
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
            <button type="button" className="btn btn-primary">Create Secretary Account</button>
            <button type="button" className="btn btn-primary">Manage Secretary Account</button>
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
            <button type="button" className="btn btn-primary">Create Secretary Account</button>
            <button type="button" className="btn btn-primary">Manage Secretary Account</button>
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
            <button type="button" className="btn btn-primary">Create Secretary Account</button>
            <button type="button" className="btn btn-primary">Manage Secretary Account</button>
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
            <button type="button" className="btn btn-primary">Create Secretary Account</button>
            <button type="button" className="btn btn-primary">Manage Secretary Account</button>
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
            <button type="button" className="btn btn-primary">Create Secretary Account</button>
            <button type="button" className="btn btn-primary">Manage Secretary Account</button>
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
            <button type="button" className="btn btn-primary">Create Secretary Account</button>
            <button type="button" className="btn btn-primary">Manage Secretary Account</button>
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
            <button type="button" className="btn btn-primary">Create Secretary Account</button>
            <button type="button" className="btn btn-primary">Manage Secretary Account</button>
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
            <button type="button" className="btn btn-primary">Create Secretary Account</button>
            <button type="button" className="btn btn-primary">Manage Secretary Account</button>
            </td>
          </tr>
        </tbody>
            </table>
                
        );
    }

    

    onSubmit(e) {
        e.preventDefault();

        const attendance = {
            name: this.state.name,
            classname: this.state.classname,
            status: this.state.status,
        }

        console.log(attendance);

        axios.post('http://localhost:5000/attendances/add', attendance)
            .then(res => console.log(res.data));

        window.location = '/';
    }

    showSchool() {

        this.setState({
            shows: true
        })

    }
    createAcc() {

        this.setState({
            create: true
        })

    }
    manageAcc() {

        this.setState({
            manage: true
        })
    }

    searchAcc() {

        this.setState({
            search: true
        })
    }


    menu() {
        return (
            
            <main>
                            <div class="container-fluid">
                                <h1 class="mt-4">Dashboard</h1>
                                <ol class="breadcrumb mb-4">
                                    <li class="breadcrumb-item active">Dashboard</li>
                                </ol>
                                <div class="row">
                                    <div class="col-xl-3 col-md-6">
                                        <div class="card bg-primary text-white mb-4">
                                        <a class="small text-white stretched-link" href="/aschool" >
                                        <div class="card-body">Display Associated Schools</div>
                                            <div class="card-footer d-flex align-items-center justify-content-between">
                                                <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                                            </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="col-xl-3 col-md-6">
                                        <div class="card bg-warning text-white mb-4">
                                        <a class="small text-white stretched-link" href="/newClassroom" >
                                        <div class="card-body">Create new Classroom</div>
                                            <div class="card-footer d-flex align-items-center justify-content-between">
                                                <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                                            </div>
                                            </a>
                                        </div>
                                    </div>

                                    <div class="col-xl-3 col-md-6">
                                        <div class="card bg-warning text-white mb-4">
                                        <a class="small text-white stretched-link" href="#" onClick={this.createAcc}>
                                        <div class="card-body">Create new Account</div>
                                            <div class="card-footer d-flex align-items-center justify-content-between">
                                                <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                                            </div>
                                            </a>
                                        </div>
                                    </div>

                                    <div class="col-xl-3 col-md-6">
                                        <div class="card bg-success text-white mb-4">
                                        <a class="small text-white stretched-link" href="#" onClick={this.manageAcc}>
                                        <div class="card-body">Manage Account</div>
                                            <div class="card-footer d-flex align-items-center justify-content-between">
                                                <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                                            </div>
                                            </a>
                                        </div>
                                    </div>

                                         <div class="col-xl-3 col-md-6">
                                        <div class="card bg-danger text-white mb-4">
                                        <a class="small text-white stretched-link" href="#" onClick={this.searchAcc}>
                                        <div class="card-body">Search Account</div>
                                            <div class="card-footer d-flex align-items-center justify-content-between">
                                                <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                                            </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>


                            </div>





                        </main>
        );
    }

    
    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        })
    }
    onChangeRole(e) {
        this.setState({
            role: e.target.value
        })
    }

    onChangeChild(e) {
        this.setState({
            child: e.target.value
        })
    }

    createUser() {
        return (
            <div>
            <div className="form-group">
                        <label>Username: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                        />
                    </div>
            <div className="form-group">
            <label>Password: </label>
            <input type="text"
                required
                className="form-control"
                value={this.state.password}
                onChange={this.onChangePassword}
            />
        </div>
        </div>
        )
    }

    createChild() {
        return (
            <div>
            <div className="form-group">
                        <label>Child: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.child}
                            onChange={this.onChangeChild}
                        />
                    </div>
        </div>
        )
    }
    createAccounts() {
        return (
            <div>
                <h3>Create New Account</h3>
                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                        <label for="custom-select">Select Type:</label>
                        <select className="custom-select" id="classname" value={this.state.role}
                            onChange={this.onChangeRole} >
                            <option value="Regular Teacher">Regular Teacher</option>
                            <option value="Supply Teacher">Supply Teacher</option>
                            <option value="Student">Student</option>
                            <option value="Parent">Parent</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Name: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}
                        />
                    </div>
                    {this.state.role == "Regular Teacher" || this.state.role == "Supply Teacher" || this.state.role == "Parent" ? this.createUser(): <h2></h2> }
                    {this.state.role == "Parent" ? this.createChild() : <h1></h1>}
                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
   
    toggleSidebar() {
        var side = document.getElementsByClassName("sideToggle");
        side[0].classList.toggle("sb-sidenav-toggled");
    }


    render() {
        return (
            <div class="sideToggle">
                <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
                    <a class="navbar-brand" href="index.html">Secretary</a>
                    <button class="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" href="#" onClick={this.toggleSidebar}><i class="fas fa-bars"></i></button>
                    {/*<!-- Navbar Search-->*/}
                    <div class="input-group">

                    </div>
                    {/*<!-- Navbar-->*/}
                    <ul class="navbar-nav ml-auto ml-md-0">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="userDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-user fa-fw"></i></a>
                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                                <a class="dropdown-item" href="/">Logout</a>
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



                                </div>
                            </div>
                            <div class="sb-sidenav-footer">
                                <div class="small">Logged in as:</div>

                            </div>
                        </nav>
                    </div>
                    <div id="layoutSidenav_content">
                        {this.state.shows == true ? this.schoolTable() :
                            this.state.create == true ? this.createAccounts() :
                                this.state.manage == true ? this.manageAccounts() :
                                this.state.search == true ? this.searchAccounts: this.menu()}

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
            </div >

        );
    }
}