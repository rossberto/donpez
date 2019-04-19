import React from 'react';
import './Login.css';
import {Donpez} from '../../util/Donpez';

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      password: '',
      authorized: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    if (e.target.name === "user") {
      this.setState({user: e.target.value});
    } else if (e.target.name === "password") {
      this.setState({password: e.target.value});
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    Donpez.login(this.state.user, this.state.password).then(auth => {
      if (auth) {
        this.props.authorize(auth);
      } else {
        console.log('aqui ando');
        alert("Usuario o contraseña incorrecto.");
        this.setState({
          user: '',
          password: ''
        });
      }
    });
  }

  render() {
    return (
      <div className="login-div">
        <form className="login-form" method='post' action="http://localhost:4001/api/auth/">
          Usuario:<br />
          <input onChange={this.handleChange} type="text" name="user" placeholder="Introduce Usuario" value={this.state.user}></input><br />
          Contraseña:<br />
          <input onChange={this.handleChange} type="password" name="password" placeholder="Introduce Contraseña" value={this.state.password}></input><br />
          <input onClick={this.handleSubmit} className="submit-button" type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}
