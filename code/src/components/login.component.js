import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import "./styles.css"
import axios from 'axios';



export default class Login extends Component {




    constructor(props) {



        super(props);

        this.redirectToTeacher = this.redirectToTeacher.bind(this);

        this.state = {
            account: 'Admin',
            username: '',
            password: ''
        }


    }


    handleSubmitClick = (e) => {
        e.preventDefault();

        /*
        if (this.state.account === 'Teacher') {
            this.loginTeacher();
        } else {
            this.loginSecretary();
        }
        */
       console.log(this.state.account)
       if (this.state.account === "Admin")
           window.location = '/admin';
       if (this.state.account === "Secretary")
           window.location = '/secretary';
       if (this.state.account === "Teacher")
           window.location = '/teacher';
       if (this.state.account === "Parent")
           window.location = '/parent';





    }

/*
    loginSecretary() {

        const acct = {
            "username": this.state.username,
            "password": this.state.password,

        }

        axios.post('http://localhost:5000/secretarys/login', acct)
            .then(response => {
                if (response.status === 200) {
                    //does nothing so far
                    window.location = '/teacher';

                } else if (response.code === 204) {
                    this.props.showError("Username and password do not match");
                    window.location = '/teacher';

                }
                else {
                    this.props.showError("Username does not exists");
                    window.location = '/teacher';

                }


            })

    }


    loginTeacher() {


        const acct = {
            "username": this.state.username,
            "password": this.state.password,

        }

        axios.post('http://localhost:5000/teachers/login', acct)
            .then(response => {
                if (response.status === 200) {
                    //does nothing so far
                    this.redirectToTeacher();

                } else if (response.code === 204) {
                    this.props.showError("Username and password do not match");
                }
                else {
                    this.props.showError("Username does not exists");
                }


            })


    }
*/

    redirectToTeacher() {

        //does not work, crashes app
        //this.props.history.push('/teachers');
    }

    redirectToSecretary() {

        //does not work, crashes app
        //this.props.history.push('/secretarys');
    }

    setType(e) {

        this.setState({
            account: e.target.value
        })


    }


    render() {

        return (

            <div id="layoutAuthentication_content">
                <main>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-5">
                                <div class="card shadow-lg border-0 rounded-lg mt-5">
                                    <div class="card-header"><h3 class="text-center font-weight-light my-4">Login</h3></div>
                                    <div class="card-body">
                                        <form>
                                            <div className="form-group text-left">
                                                <label for="custom-select">Select account type:</label>
                                                <select className="custom-select" id="classname" onChange={(e) => { this.setType(e) }}>
                                                    <option value="Admin">Admin</option>
                                                    <option value="Secretary">Secretary</option>
                                                    <option value="Teacher">Teacher</option>
                                                    <option value="Parent">Parent</option>
                                                </select>



                                                <label class="small mb-1" htmlFor="exampleInputEmail1">Username</label>
                                                <input class="form-control py-4" type="text"
                                                    id="username"
                                                    aria-describedby=""
                                                    placeholder="Enter username"
                                                    value={this.state.email}
                                                    onChangeText={(username) => { this.setState({ username }) }}
                                                />
                                                <small id="usernameHelp" className="form-text text-muted">Ask your administrator if you're not sure!</small>
                                            </div>


                                            <div className="form-group text-left">
                                                <label class="small mb-1" htmlFor="exampleInputPassword1">Password</label>
                                                <input type="password"
                                                    className="form-control py-4"
                                                    id="password"
                                                    placeholder="Password"
                                                    value={this.state.password}
                                                    onChange={(password) => { this.setState({ password }) }}
                                                />
                                            </div>

                                            <button
                                                type="submit"
                                                className="btn btn-primary"
                                                onClick={(e) => this.handleSubmitClick(e)}
                                            >Submit</button>
                                        </form >

                                    </div >
                                </div>
                            </div >
                        </div >
                        </div>
                </main >
            </div >

        )


    }
}