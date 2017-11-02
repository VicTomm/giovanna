import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Route, Redirect} from 'react-router-dom';

//Unconnected Statless component
export const PrivateRoute = ({
	isAuthenticated, 
	component:Component, 
	...rest
}) =>(
	<Route {...rest} component={(props)=>(
		isAuthenticated? (
			<section className="hero is-fullheight">
			<div className="hero-head">
				<Header logout={true}/>
			  </div>
			  <div className="hero-body">
			  <div className="container is-fluid">
				  <div className="level">
					  <div className="level-left">
						  <div className="level-item">
							  <p className="subtitle is-4 level-item__left">
								  <NavLink
									  to="/works"
									  className="giovanna-navbar-item"
									  activeClassName="is-active">
									  works
								  </NavLink>
							  </p>
						  </div>
					  </div>
					  <div className="level-item app-body">
					  <Component {...props} />
					  </div>
					  <div className="level-right">
						  <div className="level-item">
							  <p className="subtitle is-4 level-item__right">
								  <NavLink
									  to="/about"
									  className="giovanna-navbar-item"
									  activeClassName="is-active">
									  about
								  </NavLink>
							  </p>
						  </div>
					  </div>
				  </div>
			  </div>
		  </div>
			<Footer/>
		  </section>
			): (
				<Redirect to="/" />
			)
		)}/>
);

const mapStateToProps = (state)=> ({
	isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);