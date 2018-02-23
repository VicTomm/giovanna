import React from 'react';

export const Footer = () => (
    <footer className="footer">
        <div className="content has-text-centered">
            <div className="giovanna-contact">
                <span className="icon facebook">
                    <a href="fb://facebook.com/giovannatommasicollage/" className="show-for-mobile">
                        <i className="fa fa-facebook"></i>
                    </a>
                    <a href="https://www.facebook.com/giovannatommasicollage/" className="show-for-desktop">
                        <i className="fa fa-facebook"></i>
                    </a>
                </span>
                <span className="icon instagram">
                    <a href="http://instagram.com/giovannatommasi.collage">
                        <i className="fa fa-instagram"></i>
                    </a>
                </span>
                <span className="icon envelope">
                    <a href="mailto:giovanna.tommasi.visual@gmail.com">
                        <i className="fa fa-envelope-o"></i>
                    </a>
                </span>
            </div>
        </div>
    </footer>
);
export default Footer;