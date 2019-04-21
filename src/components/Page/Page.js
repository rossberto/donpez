import React from 'react';

import {AdminPage} from '../AdminPage/AdminPage'

export class Page extends React.Component {
  setPage(token, userType) {
    if (userType === 'admin') {
      return <AdminPage token={token} logout={this.props.logout} />;
    } else {
      return <CashierPage token={token} />
    }
  }

  render() {
    return this.setPage();
  }
}
