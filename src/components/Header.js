import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogout} from '../actions/auth';

export class Header extends React.Component {
				onLogout = () => {
								this
												.props
												.startLogout();
				};
				render() {
								return (
												<header className="header">
																<nav className="navbar" role="navigation" aria-label="main navigation">
																				<div className="navbar-brand">
																								<NavLink to="/" className="giovanna-headericon" activeClassName="is-active">
																												<img
																																src="/images/crabico.png"
																																alt="crab"/>
																								</NavLink>
																								<button className="button navbar-burger">
																												<span></span>
																												<span></span>
																												<span></span>
																								</button>
																				</div>
																				<div className="navbar-menu">
																								<div className="navbar-end">
																												<div className="navbar-item is-hidden-desktop-only">
																																{this.props.logout && <button
																																				className="giovanna-button giovanna-button--link navbar-item"
																																				onClick={this.onLogout}>Logout</button>}
																																{this.props.logout && <Link className="navbar-item" to="/create">Add</Link>}
																																{this.props.logout && <Link className="navbar-item" to="/projects">Projects</Link>}
																												</div>
																								</div>
																				</div>
																</nav>
												</header>
								);
				}
}

const mapStateToProps = (state, props) => ({logout: props.match.params.logout});

const mapDispatchToProps = (dispatch) => ({
				startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
