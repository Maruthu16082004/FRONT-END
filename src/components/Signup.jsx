import React, { Component } from 'react';
import axios from 'axios'


class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
        id:'',
        name:'',
        email: '',
        pwd: '',
        phno:''
    };
  }

  handleIdChange = (event) => {
    this.setState({ id: event.target.value });
  };

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ pwd: event.target.value });
  };

  handlePhoneChange = (event) => {
    this.setState({ phno: event.target.value });
  };

  

  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
        id: this.state.id,
        name: this.state.name,
        email: this.state.email,
        pwd: this.state.pwd,
        phno: this.state.phno,
        
      };
    
      axios.post('http://127.0.0.1:8080/add', data)
  };

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit} className="sign-form">
        <label className="sign-label">Id</label>
        <input
          className="sign-input"
          type="text"
          value={this.state.id}
          onChange={this.handleIdChange}
        />

        <label className="sign-label">Name</label>
        <input
          className="sign-input"
          type="text"
          value={this.state.name}
          onChange={this.handleNameChange}
        />

        <label className="sign-label">Email</label>
        <input
          className="sign-input"
          type="email"
          value={this.state.email}
          onChange={this.handleEmailChange}
        />
        <label className="login-label">Password</label>
        <input
          className="login-input"
          type="password"
          value={this.state.pwd}
          onChange={this.handlePasswordChange}
        />

        <label className="sign-label">Phno</label>
        <input
          className="sign-input"
          type="number"
          value={this.state.phno}
          onChange={this.handlePhoneChange}
        />
        
        <button className="login-button" type="submit">
          Sign Up
        </button>
      </form>
     </div>
    );
  }
}

export default Signup;