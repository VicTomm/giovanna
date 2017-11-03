import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Route, Redirect} from 'react-router-dom';

//Unconnected Statless component
export const PublicRoute = ({
	isAuthenticated, 
	component:Component, 
	...rest
}) =>(
	<Route {...rest} component={(props)=>(
		isAuthenticated? (
				<Redirect to="/projects" />
			): (
				<section className="hero is-fullheight">
					<div className="hero-head">
					<Header logout={false}/>
					</div>
					<div className="hero-body">
						<div className="container has-text-centered is-fluid">
							<div className="columns">
								<div className="column is-1 has-text-left column-flex show-for-desktop">
									<div className="subtitle is-4 level-item__left">
										<NavLink
										to="/works"
										className="giovanna-navbar-item"
										activeClassName="is-active">
											works
										</NavLink>
									</div>
								</div>
								<div className="column is-10">
									<Component {...props} />
								</div>
								<div className="column is-1 has-text-right column-flex show-for-desktop">
									<div className="subtitle is-4 level-item__right">
										<NavLink
										to="/about"
										className="giovanna-navbar-item"
										activeClassName="is-active">
											about
										</NavLink>
									</div>
								</div>
							</div>
						</div>
					</div>
					<Footer/>
		  		</section>
			)
		)}/>
);

const mapStateToProps = (state)=> ({
	isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);

