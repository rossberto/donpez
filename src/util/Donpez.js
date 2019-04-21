const urlBase = "http://localhost:4001/api/";

export const Donpez = {
  addUser(token, newUser) {
    const urlToFetch = urlBase + 'users/';
    const bodyToFetch = JSON.stringify({user: newUser});
    const headerToFetch = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      },
      body: bodyToFetch
    };

    return fetch(urlToFetch, headerToFetch).then(response => {
      if (response) {
        console.log(response);
        return response.json();
      } else {
        console.log('There was no response');
      }
    }).then(jsonResponse => {
      if (jsonResponse) {
        console.log(jsonResponse);
        return jsonResponse;
      } else {
        console.log('There was no jsonResponse');
      }
    });
  },

  login(user, password) {
    const urlToFetch = urlBase + 'login/';

    const headerToFetch = {
      method: 'POST',
      headers: {
        Authorization: user + '&' + password
      }
    }

    return fetch(urlToFetch, headerToFetch).then(response => {
      if (response.ok) {
        return response.json();
      }
    }).then(jsonResponse => {
      if (jsonResponse) {
        return jsonResponse;
      }
    });
  },

  logout(token, accessId) {
    const bodyToFetch = JSON.stringify({
      accessId: accessId
    });

    const headerToFetch = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: bodyToFetch
    };

    const urlToFetch = urlBase + 'login/';

    return fetch(urlToFetch, headerToFetch).then(response => {
      if (response) {
        return response.json();
      }
    }).then(jsonResponse => {
      if (jsonResponse) {
        return jsonResponse;
      }
    });
  },

  purchase(token, date, state, total) {
    const bodyToFetch = JSON.stringify({
      purchase: {
        date: date,
        tacosPescado: state.items[0].quantity,
        tacosCamaron: state.items[1].quantity,
        bebidas: state.items[2].quantity,
        total: total
      }
    });

    const headers = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: bodyToFetch
    }

    const urlToFetch = urlBase + 'purchase/';

    return fetch(urlToFetch, headers).then(response => {
      if (response.ok) {
        return response.json();
      } else {
        return null;
      }
    }).then(jsonResponse => {
      if (jsonResponse) {
        return jsonResponse;
      }
    });
  },

  sales() {
    const urlToFetch = urlBase + 'purchase/';

    return fetch(urlToFetch).then(response => {
      return response.json();
    }).then(jsonResponse => {
      return jsonResponse.sales;
    });
  }
}
