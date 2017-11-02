import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';

export const LoginPage = ({startLogin}) => (
  <div className="card">
    <header className="card-header">
      <p className="card-header-title">
        Giovanna Login
      </p>
    </header>
    <div className="card-content">
      <div className="content">
        <p>
          Si no eres Giovanna Tommasi,<br/>
          por favor alejate de esta sección gracias!<br/>
          Los Amo!
        </p>
      </div>
    </div>
    <footer className="card-footer">
      <button className="card-footer-item" onClick={startLogin}>Login</button>
    </footer>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
