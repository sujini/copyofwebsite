import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
class PreloaderLink extends Component {
    static contextTypes = {
        router: PropTypes.shape({
            replace: PropTypes.func.isRequired,
            push: PropTypes.func.isRequired
        }).isRequired
    }

    constructor() {
        super();
        this.state = { loading: false };
    }


    onPreload = (t, v) => {
        return new Promise(function(resolve) {
            setTimeout(resolve.bind(null, v), t)
        });
    }
    goToItem(_path) {
       /* this.context.router.history.push({
            pathname: _path
        });*/
    }
    handleClick = (evt) => {
        evt.preventDefault();

        this.setState({ loading: true });
        this.goToItem(this.props.to)
        this.onPreload(1000).then(() => {
            document.body.classList.remove('home');
            this.setState({ loading: false });
            const { replace, to } = this.props;

            if (replace) {
                this.context.router.history.replace(to)
            } else {
                this.context.router.history.push(to)
            }
        });
    };

    render() {
        return (
            <Link onClick={this.handleClick.bind(this)} {...this.props}>
        {this.props.children}
            </Link>
        );
    }
};
export default PreloaderLink;
