import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import LazyLoad from 'react-lazyload';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-105721907-1');
ReactGA.pageview(window.location.pathname + window.location.search);

export const HomePage = () => (
    <ReactCSSTransitionGroup
        transitionName="giovanna"
        transitionAppear={true}
        transitionAppearTimeout={600}
        transitionEnterTimeout={600}
        transitionLeaveTimeout={300}
        transitionEnter={true}
        transitionLeave={true}>
            <h1 className="title giovanna__title">
                Giovanna
            </h1>
            <LazyLoad once height={200}>
                <img className="giovanna-logo" src="images/rose.jpg" alt=""/>
            </LazyLoad>
            <h2 className="subtitle giovanna__subtitle">
                Tommasi
            </h2>
        </ReactCSSTransitionGroup>
);

export default HomePage;