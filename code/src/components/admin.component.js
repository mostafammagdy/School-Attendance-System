import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./styles.css"

import axios from 'axios';


export default class Admin extends Component {

    constructor(props) {
        super(props);



        this.state = {

        };
    }



    render() {
        return (
            <div class="sideToggle">
                <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
                    <a class="navbar-brand" href="index.html">Admin</a>
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
                                    <a class="nav-link" href="index.html">
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
                                    <div class="col-xl-3 col-md-6">
                                        <div class="card bg-primary text-white mb-4">
                                        <a class="small text-white stretched-link" href="/aschool" >
                                        <div class="card-body">Display All Schools</div>
                                            <div class="card-footer d-flex align-items-center justify-content-between">
                                                <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                                            </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="col-xl-3 col-md-6">
                                        <div class="card bg-warning text-white mb-4">
                                        <a class="small text-white stretched-link" href="#" >
                                        <div class="card-body">Create Secretary Account</div>
                                            <div class="card-footer d-flex align-items-center justify-content-between">
                                                <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                                            </div>
                                            </a>
                                        </div>
                                    </div>

                                    <div class="col-xl-3 col-md-6">
                                        <div class="card bg-success text-white mb-4">
                                        <a class="small text-white stretched-link" href="#" >
                                        <div class="card-body">Manage Secretary Account</div>
                                            <div class="card-footer d-flex align-items-center justify-content-between">
                                                <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                                            </div>
                                            </a>
                                        </div>
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