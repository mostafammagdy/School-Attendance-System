import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./styles.css"
import axios from 'axios';

export default class admins extends Component {


    constructor(props) {
        super(props);

        this.onChangeClassroom = this.onChangeClassroom.bind(this);
        this.onChangeRole = this.onChangeRole.bind(this);
        this.onChangeStudent = this.onChangeStudent.bind(this);
        this.onChangeTeacher = this.onChangeTeacher.bind(this);


        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            teachers: [],
            students: [],
            classrooms: [],
            teacher: "",
            currentteacher: '',
            currentstudent: '',
            student: "",
            name: '',
            classroom: '',
            role: 'Teacher',
            studentID: '',

        };
    }




    componentDidMount() {
        axios.get('http://localhost:5000/students/')
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

        axios.get('http://localhost:5000/teachers/')
            .then(response => {
                this.setState({ teachers: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    onChangeClassroom(e) {
        this.setState({
            classroom: e.target.value,
        })
    }

    onChangeRole(e) {
        this.setState({
            role: e.target.value,
        })
    }

    onChangeTeacher(e) {
        var temp = []
        this.state.teachers.forEach((s) => {
            if (s.name == e.target.value) {
                temp.push(s);
            }
        })
        console.log(temp);

        this.setState({
            teacher: e.target.value,
            currentteacher: temp,
            name: e.target.value

        })
    }

    onChangeStudent(e) {
        var temp = []
        this.state.students.forEach((s) => {
            if (s.name == e.target.value) {
                temp.push(s);
            }
        })
        console.log(temp);

        this.setState({
            student: e.target.value,
            currentstudent: temp,
            studentID: temp[0].uuid,
            name: e.target.value
        })
    }


    classSelect() {
        return (
            <div>
                <label for="custom-select">Select Class:</label>
                <select className="custom-select" id="classname"
                    defaultValue=""
                    value={this.state.classroom}
                    onChange={this.onChangeClassroom} >
                    <option value=""> -- select an classroom -- </option>
                    {this.state.classrooms.map(c => (
                        <option key={c.classname} value={c.classname}>{c.classname}</option>
                    ))}
                </select>
            </div>
        );

    }

    typeSelect() {
        return (
            <div>
                <label for="custom-select">Select Teacher/Student:</label>
                <select className="custom-select" id="classname"
                    defaultValue=""
                    value={this.state.role}
                    onChange={this.onChangeRole} >
                    <option value="teacher">Teacher</option>
                    <option value="student">Student</option>
                </select>
            </div>
        );

    }

    studentSelect() {
        return (
            <div>
                <label for="custom-select">Select Student:</label>
                <select className="custom-select" id="classname"
                    defaultValue=""
                    value={this.state.student}
                    onChange={this.onChangeStudent} >
                    <option value=""> -- select an student -- </option>
                    {this.state.students.map(c => (
                        <option key={c.name} value={c.name}>{c.name}</option>
                    ))}
                </select>
            </div>
        );

    }

    teacherSelect() {
        return (
            <div>
                <label for="custom-select">Select Teacher:</label>
                <select className="custom-select" id="classname"
                    defaultValue=""
                    value={this.state.teacher}
                    onChange={this.onChangeTeacher} >
                    <option value=""> -- select an teacher -- </option>
                    {this.state.teachers.map(c => (
                        <option key={c.name} value={c.name}>{c.name}</option>
                    ))}
                </select>
            </div>
        );

    }

    onSubmit(e) {
        e.preventDefault();

        const enr = {
            name: this.state.name,
            role: this.state.role,
            classname: this.state.classroom,
            studentID: this.state.studentID,
        }

        console.log(enr);

        axios.post('http://localhost:5000/enrolleds/add', enr)
            .then(res => console.log(res.data));

        window.location = '/secretary';
    }



    toggleSidebar() {
        var side = document.getElementsByClassName("sideToggle");
        side[0].classList.toggle("sb-sidenav-toggled");
    }


    render() {
        return (
            <div class="sideToggle">
                <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
                    <a class="navbar-brand" href="/secretary">Secretary</a>
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



                        <main>
                            <div class="container-fluid">
                                <h1 class="mt-4">Dashboard</h1>
                                <ol class="breadcrumb mb-4">
                                    <li class="breadcrumb-item active">Dashboard</li>
                                </ol>
                                <div class="row">

                                    <div class="col">
                                        {this.classSelect()}
                                    </div>
                                </div>
                                <div class="row">

                                    <div class="col">
                                        {this.typeSelect()}
                                    </div>
                                </div>
                                <div class="row">

                                    <div class="col">
                                        {this.state.role == "Teacher" ? this.teacherSelect() : this.studentSelect()}
                                    </div>

                                </div>
                                <div class="row">

                                    <div class="col">
                                    <form onSubmit={this.onSubmit}>
<div className="form-group">
                    <input type="submit" value="Enroll User" className="btn btn-primary" />
                </div>
            </form>

                                    </div>

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
            </div >

        );
    }
}