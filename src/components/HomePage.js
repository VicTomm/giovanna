import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export const HomePage = () => (
    <ReactCSSTransitionGroup
        transitionName="giovanna"
        transitionAppear={true}
        transitionAppearTimeout={600}
        transitionEnterTimeout={600}
        transitionLeaveTimeout={300}
        transitionEnter={true}
        transitionLeave={true}>
        <div className="container has-text-centered">
            <h1 className="title giovanna__title">
                Giovanna
            </h1>
            <img className="giovanna-logo" src="images/rose.jpg" alt=""/>
            <h2 className="subtitle giovanna__subtitle">
                Tommasi
            </h2>
        </div>
        </ReactCSSTransitionGroup>
);

export default HomePage;