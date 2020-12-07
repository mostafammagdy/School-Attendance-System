import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import "./styles.css"
import axios from 'axios';



export default class Login extends Component {

    


    constructor (props) {

        

        super (props);

        this.redirectToTeacher = this.redirectToTeacher.bind(this);

        this.state = {
            account: '',
            username: '',
            password: ''
        }


    }

    
    
 

    handleSubmitClick = (e) => {
        e.preventDefault();
        window.location='/teacher';


        if (this.state.account === 'Teacher')
        {
            this.loginTeacher();
        }else 
        {
            this.loginSecretary();
        }

        

        


    }


    loginSecretary() {

        const acct = {
            "username": this.state.username,
            "password": this.state.password,

        }

        axios.post('http://localhost:5000/secretarys/login', acct)
        .then(response => {
            if (response.status === 200)
            {
                //does nothing so far
                window.location='/teacher';

            }else if(response.code === 204){
                this.props.showError("Username and password do not match");
                window.location='/teacher';

            }
            else{
                this.props.showError("Username does not exists");
                window.location='/teacher';

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
            if (response.status === 200)
            {
                //does nothing so far
                this.redirectToTeacher();

            }else if(response.code === 204){
                this.props.showError("Username and password do not match");
            }
            else{
                this.props.showError("Username does not exists");
            }


        })


    }


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


   render () {

    return (

    <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
    <form>
        <div className="form-group text-left">
            <label for="custom-select">Select account type:</label>
            <select className="custom-select" id="classname" onChange={(e) => {this.setType(e)}}>
                <option value="Teacher">Teacher</option>
                <option value="Secretary">Secretary</option>
            </select>
        <label htmlFor="exampleInputEmail1">Username</label>
        <input type="text" 
               className="form-control" 
               id="username" 
               aria-describedby="" 
               placeholder="Enter username" 
               value={this.state.email}
               onChangeText={(username) => {this.setState( { username } )}}
        />
        <small id="usernameHelp" className="form-text text-muted">Ask your administrator if you're not sure!</small>
        </div>
        <div className="form-group text-left">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input type="password" 
               className="form-control" 
               id="password" 
               placeholder="Password"
               value={this.state.password}
               onChange={(password) => {this.setState({password})}} 
        />
        </div>
        <div className="form-check">
        </div>
        <button 
            type="submit" 
            className="btn btn-primary"
            onClick={(e) => this.handleSubmitClick(e)}
        >Submit</button>
    </form>
</div>

    )


   }
}