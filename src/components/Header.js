import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogout} from '../actions/auth';

export class Header extends React.Component {
				constructor() {
								super();
								this.state = {
												isActive: false
								}
				}

				handleBurgerMenu = () => {
								this.setState((prevState) => ({
												isActive: !prevState.isActive
								}));
				};
				onLogout = () => {
								this
												.props
												.startLogout();
				};
				render() {
								return (
												<nav className="navbar">
																<div className="container is-fluid">
																				<div className="navbar-brand">
																								<NavLink to="/" className="giovanna-headericon" activeClassName="is-active">
																												<img src="/images/crabico.png" alt="crab"/>
																								</NavLink>
																								<span onClick={this.handleBurgerMenu} className={"navbar-burger burger " + (this.state.isActive ? 'is-active' : '')} data-target="navbarMenuHeroC">
																												<span></span>
																												<span></span>
																												<span></span>
																								</span>
																				</div>
																				<div id="navbarMenuHeroC" className={"navbar-menu " + (this.state.isActive ? 'is-active' : '')}>
																								<div className="navbar-end show-for-desktop">
																												<div className="navbar-item is-hidden-desktop-only">
																																{this.props.logout && <button
																																				className="giovanna-button giovanna-button--link navbar-item"
																																				onClick={this.onLogout}>Logout</button>}
																												</div>
																												<div className="navbar-item is-hidden-desktop-only">
																																{this.props.logout && <Link className="navbar-item" to="/create">Add</Link>}
																												</div>
																												<div className="navbar-item is-hidden-desktop-only">
																																{this.props.logout && <Link className="navbar-item" to="/projects">Projects</Link>}
																												</div>
																								</div>
																								<div className="navbar-end show-for-mobile">
																									<div className="navbar-item">
																										<NavLink
																														onClick={this.handleBurgerMenu}
																														to="/works"
																														className="giovanna-navbar-item"
																														activeClassName="is-active">
																														works
																										</NavLink>
																									</div>
																									<div className="navbar-item">
																										<NavLink
																														onClick={this.handleBurgerMenu}
																														to="/about"
																														className="giovanna-navbar-item"
																														activeClassName="is-active">
																														about
																										</NavLink>
																									</div>
																								</div>
																								
																				</div>
																</div>
												</nav>
								);
				}
}

const mapStateToProps = (state, props) => ({logout: props.match.params.logout});

const mapDispatchToProps = (dispatch) => ({
				startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
