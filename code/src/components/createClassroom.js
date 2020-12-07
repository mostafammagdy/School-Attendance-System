import React, { Component } from 'react';
import axios from 'axios';

export default class CreateClassroom extends Component {
  constructor(props) {
    super(props);

    this.onChangeclassname = this.onChangeclassname.bind(this);
    this.onSubmit = this.onSubmit.bind(this);


    this.state = {
      classname: ''
    }
  }

  onChangeclassname(e) {
    this.setState({
        classname: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const classroom = {
        classname: this.state.classname
    }

    console.log(classroom);

    axios.post('http://localhost:5000/classrooms/add', classroom)
      .then(res => console.log(res.data));

    this.setState({
        classname: ''
    })
    window.location = '/secretary';


  }

  createClass() {
    return (
      <div>
        <h3>Create New Classroom</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Classname: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.classname}
                onChange={this.onChangeclassname}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create Classroom" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
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
              {this.createClass()}

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
    )
  }
}