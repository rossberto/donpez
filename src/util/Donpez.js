const urlBase = "http://localhost:4001/api/";

export const Donpez = {
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
      return response.json();
    }).then(jsonResponse => {
      return jsonResponse;
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
