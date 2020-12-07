import React, { Component } from 'react';
import axios from 'axios';

export default class CreateClassroom extends Component {
  constructor(props) {
    super(props);

    this.onChangeclassname = this.onChangeclassname.bind(this);

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

    axios.post('http://localhost:5000/classroom/add', classroom)
      .then(res => console.log(res.data));

    this.setState({
        classname: ''
    })
  }

  render() {
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
    )
  }
}