const urlBase = "http://localhost:4001/api/";

export const Donpez = {
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
        console.log(response.ok);
        return response.json();
      }
    }).then(jsonResponse => {
      if (jsonResponse) {
        console.log(jsonResponse);
        return jsonResponse;
      }
    });
  },

  purchase(date, state, total) {
    const bodyToFetch = JSON.stringify({
      purchase: {
        date: date,
        tacosPescado: state.items[0].quantity,
        tacosCamaron: state.items[1].quantity,
        bebidas: state.items[2].quantity,
        cashier: state.cashier,
        total: total
      }
    });

    const headers = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
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
