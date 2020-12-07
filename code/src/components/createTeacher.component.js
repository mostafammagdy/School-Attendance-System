import React, { Component } from 'react';
import axios from 'axios';

export default class createTeacher extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeType = this.onChangeType.bind(this);

    this.state = {
      username: '',
      name: '',
      account: '',
      users: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
            username: response.data[0].username
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangeUsername(e) {
    this.setState({
      name: e.target.value
    })
  }

  onChangeName(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangeType(e) {

        this.setState({
            account: e.target.value
        })
  }

  



  

  
  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
    }

    console.log(exercise);

    axios.post('http://localhost:5000/exercises/add', exercise)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Create New Teacher Account</h3>
      <form onSubmit={this.onSubmit}>

        <div className="form-group"> 
        <label for="custom-select">Select account type:</label>
            <select className="custom-select" id="classname" onChange={(e) => {this.onChangeType(e)}}>
                <option value="Teacher">Regular Teacher</option>
                <option value="Secretary">Supply Teacher</option>
            </select>

            <label>Name: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
              />

          <label>Username: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.user}
              onChange={this.onChangeName}
              />
        </div>
       
       

        <div className="form-group">
          <input type="submit" value="Create New Teacher account" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}