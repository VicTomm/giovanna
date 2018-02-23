import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';

export const LoginPage = ({startLogin}) => (
  <div className="column is-4 login-form">
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
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input className="input" type="email" placeholder="Email"/>
              <span className="icon is-small is-left">
                <i className="fa fa-envelope"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left">
              <input className="input" type="password" placeholder="Password"/>
              <span className="icon is-small is-left">
                <i className="fa fa-lock"></i>
              </span>
            </p>
          </div>
        </div>
      </div>
      <footer className="card-footer">
        <button className="card-footer-item" onClick={startLogin}>Login</button>
      </footer>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
