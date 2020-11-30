import React from 'react';
import { BrowserRouter, withRouter } from "react-router-dom";

import Header from '../layout/Header'
import Sidebar from '../layout/Sidebar'

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('history', this.props.history)
    return (
        <React.Fragment>
            <Header />
            <div className="app-main">
              <Sidebar/>
              <div className="app-content">
                {this.props.children}
              </div>
            </div>
        </React.Fragment>
    );
  }
}

export default withRouter(MainContainer);