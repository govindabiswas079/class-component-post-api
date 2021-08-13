import logo from './logo.svg';
import './App.css';
import React from 'react';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      salary: "",
      age: "",
    }
  }

  submit() {
    console.log(this.state)
    let url = "http://dummy.restapiexample.com/api/v1/create";
    let data = this.state;
    fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application-json"
      },
      body: JSON.stringify(data)
    }).then((result) => {
      result.json().then((resp) => {
        console.warn("resp", resp)
      })
    })
  }

  render() {
    return (
      <div>
        <h1>Post Api</h1>
        <input type="text" value={this.state.name} name="name" onChange={(data) => { this.setState({ name: data.target.value }) }} /> <br /><br /><br />
        <input type="text" value={this.state.salary} name="salary" onChange={(data) => { this.setState({ salary: data.target.value }) }} /> <br /><br /><br />
        <input type="text" value={this.state.age} name="age" onChange={(data) => { this.setState({ age: data.target.value }) }} /> <br /><br /><br />
        <button onClick={() => { this.submit() }}>Submit</button>
      </div>
    )
  }
}
