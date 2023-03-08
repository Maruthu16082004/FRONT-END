import React, { Component } from 'react';

import axios from 'axios';


class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      email: '',
      pwd: '',
      phno: ''
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

  handlePwdChange = (event) => {
    this.setState({ pwd: event.target.value });
  };

  handlePhnoChange = (event) => {
    this.setState({ phno: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      id: this.state.id,
      name: this.state.name,
      email: this.state.email,
      pwd: this.state.pwd,
      phno: this.state.phno
    };

    axios.put('http://127.0.0.1:8080/update', data);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="sign-form">
        <label className="sign-label">ID</label>
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
          type="text"
          value={this.state.email}
          onChange={this.handleEmailChange}
        />

        <label className="sign-label">Password</label>
        <input
          className="sign-input"
          type="password"
          value={this.state.pwd}
          onChange={this.handlePwdChange}
        />

        <label className="sign-label">Phone Number</label>
        <input
          className="sign-input"
          type="tel"
          value={this.state.phno}
          onChange={this.handlePhnoChange}
        />

        <button className="update-button" type="submit">
          Update
        </button>
      </form>
    );
  }
}

export default Update;