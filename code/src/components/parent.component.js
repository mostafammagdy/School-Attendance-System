import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./styles.css"
import axios from 'axios';


const Records = props => (
    <tr class="attendance">
        <td>{props.record.name}</td>
        <td>{props.record.status}</td>
        <td>{props.record.createdAt.substring(0, 10)}</td>
    </tr>
)

export default class Teacher extends Component {

    constructor(props) {
        super(props);

        this.onChangeStudent = this.onChangeStudent.bind(this);

        this.state = {
            student: '',
            students: [],
            records: [],
            currentrecords: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/attendances/')
            .then(response => {
                this.setState({ records: response.data })
            })
            .catch((error) => {
                console.log(error);
            })

        axios.get('http://localhost:5000/parents/')
            .then(response => {
                this.setState({ students: response.data })
            })
            .catch((error) => {
                console.log(error);
            })


    }

    onChangeStudent(e) {
        var temp = []
        this.state.records.forEach((s) => {
            if (s.name == e.target.value) {
                temp.push(s);
            }
        })
        console.log(temp);

        this.setState({
            student: e.target.value,
            currentrecords: temp
        })
    }

    recordList() {

        return this.state.currentrecords.map(s => {
            return <Records record={s} />;
        })
    }

    recordTable() {
        return (
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {this.recordList()}
                </tbody>
            </table>
        );
    }

    studentSelect() {
        return (
            <div>
                <select className="custom-select" id="studentRecord"
                    defaultValue=""
                    value={this.state.student}
                    onChange={this.onChangeStudent} >
                    <option value=""> -- select a student -- </option>
                    {this.state.students.map(student => (
                        <option key={student.student} value={student.student}>{student.student}</option>
                    ))}
                </select>
            </div>
        );

    }

    toggleSidebar() {
        var side = document.getElementsByClassName("sideToggle");
        side[0].classList.toggle("sb-sidenav-toggled");
    }


    render() {
        return (
            <div class="sideToggle">
                <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
                    <a class="navbar-brand" href="index.html">Parent</a>
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
                                    <a class="nav-link" href="/parent">
                                        <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                                        Dashboard
                            </a>


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
                                        <h2>Select Student</h2>
                                    </div>
                                    <div class="col">
                                        {this.studentSelect()}
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col">
                                        {this.recordTable()}
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
            </div>
        );
    }
}