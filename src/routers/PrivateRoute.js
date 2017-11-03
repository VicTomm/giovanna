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
			  	<div className="container has-text-centered">
					  <div className="column is-6 is-offset-3">
						  <Component {...props} />
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