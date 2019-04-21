import React from 'react';

import {Donpez} from '../../util/Donpez';

export class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userType: 'Cajero'
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getUserType(checked) {
    if (checked === true) {
      return 'Administrador';
    } else {
      return 'Cajero';
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const userElements = document.getElementsByName('user');
    const passwordElements = document.getElementsByName('password');
    const confirmElements = document.getElementsByName('confirm');
    const typeElement = document.getElementById('is-admin');

    const username = userElements[0].value;
    const password = passwordElements[0].value;

    if (username === '' || password === '') {
      alert('Usuario y contraseña no pueden estar vacíos.')
      return;
    }

    const confirm = confirmElements[0].value;
    const userType = this.getUserType(typeElement.checked);

    if (password === confirm) {
      const newUser = {
        username: username,
        password: password,
        userType: userType
      }
      console.log(newUser);
      Donpez.addUser('aqui va el token', newUser).then(response => {
        if (response) {
          console.log(response);
          alert(`Nuevo usuario ${response.username} con privilegios del tipo ${response.user_type}`);
          userElements[0].value = '';
          typeElement.checked = false;
        }
      });
    } else {
      alert('Vuelve a introducir contraseña: \nConfirmación no coincide con la contraseña');
    }

    passwordElements[0].value = '';
    confirmElements[0].value = '';
  }

  render() {
    return (
      <div className="login-div">
        <form className="login-form" method='post' action="http://localhost:4001/api/auth/">
          Usuario:<br />
          <input type="text" name="user" placeholder="Introduce Usuario"></input><br />
          Contraseña:<br />
          <input type="password" name="password" placeholder="Introduce Contraseña"></input><br />
          Confirmar Contraseña:<br />
          <input type="password" name="confirm" placeholder="Confirma Contraseña"></input><br />
          <input onClick={this.handleSubmit} className="submit-button" type="submit" value="Enviar"></input>
          <input id="is-admin" type="checkbox" name="user-type" value="admin" />Administrador<br />
        </form>
      </div>
    );
  }
}
