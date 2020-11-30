import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./styles.css"
import axios from 'axios';


const Students = props => (
    <tr class="attendance">
            <td><input type="hidden" value={props.student.username}/>{props.student.username}</td>
            <td><input type="radio" name={props.student.username} value="present"/>&nbsp;</td>
            <td><input type="radio" name={props.student.username} value="absent" />&nbsp;</td>
            <td><input type="radio" name={props.student.username} value="late"/>&nbsp;</td>
    </tr>
)

export default class Teacher extends Component {

    constructor(props) {
        super(props);

        this.onChangeClassroom = this.onChangeClassroom.bind(this);
        this.takeAttendance = this.takeAttendance.bind(this);


        this.state = { 
            classroom: '',
            status: '',
            students: [],
            currentstudent: [],
            classrooms: [] 
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/enrolleds/')
            .then(response => {
                this.setState({ students: response.data })
            })
            .catch((error) => {
                console.log(error);
            })

        axios.get('http://localhost:5000/classrooms/')
            .then(response => {
                this.setState({ classrooms: response.data })
            })
            .catch((error) => {
                console.log(error);
            })


    }

    onChangeClassroom(e) {
        var temp = []
            this.state.students.forEach((s) => {
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

    studentList() {
        
        return this.state.currentstudent.map(s => {
            return <Students student={s}/>;
        })
    }

    studentTable() {
        return (
        <form onSubmit={this.takeAttendance}>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>Name</th>
                        <th>Present</th>
                        <th>Absent</th>
                        <th>Late</th>
                    </tr>
                </thead>
                <tbody>
                    {this.studentList()}
                </tbody>
            </table>
                <div className="form-group">
                    <input type="submit" value="Submit Attendance" className="btn btn-primary" />
                </div>
            </form>
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

    takeAttendance(e) {
        e.preventDefault();
        console.log("test")
            var check = "";
            var a = "";
            var attendance = document.getElementsByClassName("attendance");
            for(var i = 0; i < attendance.length; i++)
            {
                a = attendance[i].cells;
                if (a[1].children[0].checked == true){
                    check = a[1].children[0].value;
                }
                if (a[2].children[0].checked == true){
                    check = a[2].children[0].value;
                }
                if (a[3].children[0].checked == true){
                    check = a[3].children[0].value;
                }

                console.log(a[0].children[0].value);
                console.log(check);

                const att = {
                    name: a[0].children[0].value,
                    classname: this.state.classroom,
                    status: check,
                }

                axios.post('http://localhost:5000/attendances/add', att)
                    .then(res => console.log(res.data));
            }
            window.location = '/';

    }

    render() {
        return (
            <div>
                <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
                    <a class="navbar-brand" href="index.html">Teacher</a>
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
                                    <a class="nav-link" href="index.html">
                                        <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                                        Dashboard
                            </a>
                                    <div class="sb-sidenav-menu-heading">Interface</div>
                                    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                        <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                                        Layouts
                                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                                    </a>
                                    <div class="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-parent="#sidenavAccordion">
                                        <nav class="sb-sidenav-menu-nested nav">
                                            <a class="nav-link" href="layout-static.html">Static Navigation</a>
                                            <a class="nav-link" href="layout-sidenav-light.html">Light Sidenav</a>
                                        </nav>
                                    </div>
                                    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                        <div class="sb-nav-link-icon"><i class="fas fa-book-open"></i></div>
                                        Pages
                                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
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
                                Name
                    </div>
                        </nav>
                    </div>
                    <div id="layoutSidenav_content">
                        <main>
                            <div class="container-fluid">
                                <h1 class="mt-4">Dashboard</h1>
                                <ol class="breadcrumb mb-4">
                                    <li class="breadcrumb-item active">Dashboard</li>
                                </ol>
                                <div class="row">
                                <div class="col-3">
                                    <h2>Select Classroom</h2>
                                </div>
                                <div class="col">
                                    {this.classSelect()}
                                </div>
                                </div>
                                <hr/>
                                <div class="row">
                                    <div class="col">
                                    {this.studentTable()}
                                    </div>
                                </div>
                                <div class="row test">
                                    {this.state.classroom}
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