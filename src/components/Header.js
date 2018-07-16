import React, { Component,Fragment  } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {


    componentWillMount() {
    };
    componentDidMount() {


    };



    render() {
        return (
            <Fragment>
                <div id="header">
                    <div className="inner-header">
                        <div className="left">
                            <div className="logo white" >
                                <Link to="/">
                                    <span className="icon-logo">
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div className="right">
                            <div className="top">
                                <div className="socials">
                                    <ul>
                                        <li className="instagram">
                                            <a href="https://www.instagram.com/jaunedechrome/" target="_blank" rel="noopener noreferrer">
                                                <span className="text">INSTAGRAM</span>
                                            </a>
                                        </li>
                                        <li className="lang">
                                            <div className="current">
                                                <a href="http://www.jaunedechrome.com/en/" className="reload">
                                                    <span className="text">English</span>
                                                </a>

                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="bottom">
                                <ul>
                                    <li>
                                        <Link to="/les-collections"><span className="text">Les collections</span></Link>
                                    </li>
                                    <li>
                                        <Link to="/lidentite"><span className="text">L'identité</span></Link>
                                    </li>
                                    <li>
                                        <Link to="/les-ateliers"><span className="text">Les ateliers</span></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="cb"></div>
                    </div>
                </div>

                <div id="header-light">
                    <div className="d-table">
                        <div className="d-cell">
                            <div className="left">
                                <div className="logo">
                                    <Link to="/">
                                        <span className="icon-logoSticky"></span>
                                    </Link>
                                </div>
                            </div>
                            <div className="right">
                                <div className="bottom">
                                    <ul>
                                        <li>
                                            <Link to="/les-collections">
                                                <span className="text">Les collections</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/lidentite">
                                                <span className="text">L'identité</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/les-ateliers">
                                                <span className="text">Les ateliers</span>
                                            </Link>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                            <div className="cb"></div>
                        </div>
                    </div>
                </div>
            </Fragment>




        );
    }
};

export default Header;
