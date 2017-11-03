import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export const AboutPage = () => (
    <ReactCSSTransitionGroup
        transitionName="giovanna"
        transitionAppear={true}
        transitionAppearTimeout={600}
        transitionEnterTimeout={600}
        transitionLeaveTimeout={300}
        transitionEnter={true}
        transitionLeave={true}>
            <div className="column is-8 is-offset-2">
                <img className="giovanna-profile" src="images/IMG_3747.jpg" alt="Giovanna"/>
                <hr/>
                <p>
                    Aun cuando no existiera un mensaje que se quiera compartir, todo es mas claro y
                    apegado fielmente a lo que en realidad sentimos cuando se aprovecha lo que
                    aparentemente no tiene sentido.
                    <br/>
                    Mezclar elementos de imágenes que fueron creadas para diferentes fines puede
                    tener un resultado encantador factible de múltiples interpretaciones.
                </p>
            </div>
    </ReactCSSTransitionGroup>
);
export default AboutPage;